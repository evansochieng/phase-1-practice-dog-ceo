console.log('%c HI', 'color: firebrick')

// URLs
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1
    // Add dog images to the DOM
    fetch(imgUrl) // Fetch images
    .then( (response) => response.json()) //parse response as json
    .then( (result) => {
        imageArray = result.message
        // for (let element of result){
        //     addImage(element)
        // }
        imageArray.forEach( (element) => addImage(element)) //add image to the DOM
    })

    // Challenge 2
    // List dog breeds
    fetch(breedUrl) // fetch breed info
    .then( (response) => response.json()) //parse response as json
    .then( (result) => {
        breedObject = result.message
        for (item in breedObject){ //iterate over the object with breed names
            addBreed(item) // add dog breed to the list
        }
    })
    // Challenge 3
    // Change color of lists when clicked
    .then( () => {
        const li = document.querySelectorAll('li'); //grab the lists of dog breeds 
        for (let breed of li){ // iterate over all the list elements
            breed.addEventListener('click', (event) => { //listen to click event on the list
                currentBreed = event.target // get the list
                currentBreed.style.color = 'green'; //change font color of that list element
            })
        }
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

// Add breeds function
function addBreed(breed){
    const li = document.createElement('li'); //create list element
    li.textContent = breed; //add breed name

    // Grab the div for the images
    const breedList = document.querySelector("#dog-breeds");

    // Append image
    breedList.appendChild(li);
}