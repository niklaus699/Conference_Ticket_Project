// function storeImage (){
//     const imageInput = document.getElementById('file-input');
//     const file = imageInput.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//         const dataUrl = e.target.result;
//         localStorage.setItem('storedImage', dataUrl);
//     };
//     reader.readAsDataURL(file);
// } 

// //Retrieve the image from localStorage and display it
// function displayImage()  {
//     const storedImage = localStorage.getItem('storedImage');
//     const imageElement = document.getElementById('displayedImage');

//     if (storedImage) {
//         imageElement.src = storedImage;
//     }
// }