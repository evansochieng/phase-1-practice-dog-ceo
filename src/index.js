console.log('%c HI', 'color: firebrick')

// Challenge 1
// Add images to the DOM
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', () => {
    // Fetch images
    fetch(imgUrl)
    .then( (response) => response.json()) //parse response as json
    .then( (result) => {
        imageArray = result.message
        // for (let element of result){
        //     addImage(element)
        // }
        imageArray.forEach( (element) => addImage(element)) //add image to the DOM
    })
})

// Add image function
function addImage(imageSource){
    const img = document.createElement('img'); //create an image tag
    img.src = imageSource; //set the source to be input from the atrrays

    // Grab the div for the images
    const imageDiv = document.querySelector("#dog-image-container");

    // Append image
    imageDiv.appendChild(img);
}
