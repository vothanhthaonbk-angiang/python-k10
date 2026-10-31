import os
import zipfile

def make_zip(source_dir, output_zip, exclude_dirs=None, exclude_files=None):
    if exclude_dirs is None:
        exclude_dirs = set()
    if exclude_files is None:
        exclude_files = set()

    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            # Exclude directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.git')]
            for file in files:
                if file in exclude_files or file.endswith('.zip'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, source_dir)
                zipf.write(full_path, rel_path)

print("Creating public/source_code.zip...")
make_zip(
    '.', 
    'public/source_code.zip', 
    exclude_dirs={'node_modules', '.git', 'dist', '.vite'},
    exclude_files={'source_code.zip', 'dist.zip'}
)

print("Creating public/dist.zip...")
make_zip(
    'dist', 
    'public/dist.zip',
    exclude_files={'source_code.zip', 'dist.zip'}
)

# Also copy into dist so direct dist folder contains them
import shutil
shutil.copy('public/source_code.zip', 'dist/source_code.zip')
shutil.copy('public/dist.zip', 'dist/dist.zip')

print("All archives packaged successfully!")
