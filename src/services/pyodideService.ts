/**
 * Pyodide execution service for in-browser Python runtime.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let pyodideInstance: any = null;
let isLoadingPyodide = false;
const loadingCallbacks: Array<(pyodide: any) => void> = [];

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  error?: string;
  durationMs: number;
}

export async function getPyodide(): Promise<any> {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (isLoadingPyodide) {
    return new Promise((resolve) => {
      loadingCallbacks.push(resolve);
    });
  }

  isLoadingPyodide = true;

  try {
    // If not already in window, dynamically load script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).loadPyodide !== 'function') {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Không thể tải thư viện Pyodide từ máy chủ CDN. Vui lòng kiểm tra kết nối mạng.'));
        document.head.appendChild(script);
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loadPyodideFn = (window as any).loadPyodide;
    pyodideInstance = await loadPyodideFn({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/',
    });

    isLoadingPyodide = false;
    loadingCallbacks.forEach((cb) => cb(pyodideInstance));
    loadingCallbacks.length = 0;
    return pyodideInstance;
  } catch (err) {
    isLoadingPyodide = false;
    throw err;
  }
}

/**
 * Translates common Python tracebacks into friendly Vietnamese explanations
 */
export function translatePythonError(rawError: string): string {
  let friendly = '';
  if (rawError.includes('SyntaxError')) {
    friendly = '⚠️ Lỗi cú pháp (SyntaxError): Kiểm tra dấu hai chấm (:), dấu ngoặc mở/đóng, hoặc từ khóa viết sai chính tả.';
  } else if (rawError.includes('IndentationError')) {
    friendly = '⚠️ Lỗi thụt lề (IndentationError): Python yêu cầu thụt lề chuẩn (thường là 4 dấu cách) ở các khối lệnh như if, for, while, def.';
  } else if (rawError.includes('NameError')) {
    friendly = '⚠️ Lỗi tên biến/hàm (NameError): Bạn đang gọi một biến hoặc hàm chưa được khai báo trước đó.';
  } else if (rawError.includes('TypeError')) {
    friendly = '⚠️ Lỗi kiểu dữ liệu (TypeError): Phép toán không phù hợp giữa các kiểu dữ liệu (ví dụ cộng số với chuỗi mà quên ép kiểu int/str).';
  } else if (rawError.includes('ValueError')) {
    friendly = '⚠️ Lỗi giá trị (ValueError): Hàm nhận giá trị không hợp lệ (ví dụ ép kiểu int("abc") hoặc số liệu không đúng định dạng).';
  } else if (rawError.includes('ZeroDivisionError')) {
    friendly = '⚠️ Lỗi chia cho 0 (ZeroDivisionError): Không thể thực hiện phép chia / hoặc % cho số 0.';
  } else if (rawError.includes('IndexError')) {
    friendly = '⚠️ Lỗi vượt quá chỉ số (IndexError): Bạn đang truy cập vị trí phần tử vượt quá độ dài của danh sách (List) hoặc chuỗi.';
  } else if (rawError.includes('KeyError')) {
    friendly = '⚠️ Lỗi khóa (KeyError): Khóa không tồn tại trong từ điển (Dictionary).';
  }

  return friendly ? `${friendly}\n\nChi tiết kỹ thuật:\n${rawError}` : rawError;
}

/**
 * Executes a Python script with optional custom standard input (stdin)
 */
export async function runPythonCode(
  code: string,
  stdinContent: string = '',
  onInteractiveInput?: (promptMsg: string) => Promise<string>
): Promise<ExecutionResult> {
  const pyodide = await getPyodide();
  const startTime = performance.now();

  let stdoutBuffer = '';
  let stderrBuffer = '';

  try {
    pyodide.setStdout({
      batched: (text: string) => {
        stdoutBuffer += text + '\n';
      },
    });

    pyodide.setStderr({
      batched: (text: string) => {
        stderrBuffer += text + '\n';
      },
    });

    // Provide standard input handling
    // If interactive input handler is provided, we expose a JS callback
    if (onInteractiveInput) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__py_input_prompt = async (promptText: string) => {
        const val = await onInteractiveInput(promptText || '');
        return val;
      };

      const setupCode = `
import builtins
import sys
import io

stdin_data = ${JSON.stringify(stdinContent)}
if stdin_data:
    sys.stdin = io.StringIO(stdin_data)
`;
      await pyodide.runPythonAsync(setupCode);
    } else {
      const setupCode = `
import sys
import io

stdin_data = ${JSON.stringify(stdinContent)}
sys.stdin = io.StringIO(stdin_data)
`;
      await pyodide.runPythonAsync(setupCode);
    }

    // Execute user code
    await pyodide.runPythonAsync(code);

    const endTime = performance.now();
    return {
      stdout: stdoutBuffer.trimEnd(),
      stderr: stderrBuffer.trimEnd(),
      durationMs: Math.round(endTime - startTime),
    };
  } catch (err: any) {
    const endTime = performance.now();
    const errorStr = String(err?.message || err);
    return {
      stdout: stdoutBuffer.trimEnd(),
      stderr: stderrBuffer.trimEnd(),
      error: translatePythonError(errorStr),
      durationMs: Math.round(endTime - startTime),
    };
  }
}
