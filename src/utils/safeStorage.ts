/**
 * Safe local storage wrapper with memory fallback for older iOS Safari (Private Browsing)
 * and restricted Android WebViews where localStorage throws QuotaExceededError or SecurityError.
 */

const memoryFallback: Record<string, string> = {};

export const safeStorage = {
  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch {
      // Fallback to memory
    }
    return memoryFallback[key] ?? null;
  },

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
        return;
      }
    } catch {
      // Storage unavailable or quota exceeded; use fallback
    }
    memoryFallback[key] = value;
  },

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Ignore
    }
    delete memoryFallback[key];
  },
};
