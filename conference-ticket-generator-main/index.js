const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('fileInput');

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

document.getElementById("fileInput").addEventListener("change", function(event) {
    const imagefile = event.target.files[0]; // Get the uploaded file
    if (imagefile && imagefile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Save the Base64 string to localStorage
            localStorage.setItem("uploadedImage", e.target.result);
        };
        reader.readAsDataURL(imagefile);
    } else {
        alert("Please upload a valid image file.");
    }
});

// // Store the full name as before
// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     const fullName = document.getElementById("fullName").value;
//     localStorage.setItem("userFullName", fullName);

//     // Redirect to the ticket.html page
//     window.location.href = "ticket.html";
// });