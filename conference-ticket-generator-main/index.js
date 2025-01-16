const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');

// Open file input when clicking the drop zone
dropZone.addEventListener('click', () => fileInput.click());

// Add drag-over class when dragging over the drop zone
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

// Remove drag-over class when dragging leaves the drop zone
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));

// Handle file drop
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    const files = e.dataTransfer.files; // Get dropped files
    handleFiles(files);
});

// Handle file selection via the input
fileInput.addEventListener('change', () => {
    const files = fileInput.files; // Get selected files
    handleFiles(files);
});

// Process the files
function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            alert(`Uploaded: ${file.name}`);
        } else {
            alert('Please upload a valid image file.');
        }
    }
}