import { endpoint, getMemes } from './api.js'
import { arrayStructure, filterBySize, orderByID} from './helpers.js'

let memeArray = 
getMemes(endpoint)
.then(arrayStructure)
.then(memes => filterBySize(memes,500))
.then(orderByID)
.then(memes => {return memes})
.catch(err => {
    console.log("Este es el error:" + err)
})


// Elementos DOM
let meme_image = document.getElementsByClassName("meme")[0]
let h1 = document.querySelector("h1")
let button = document.querySelector("button")
let name = document.querySelector(".name")


// Función Meme del Día
function getMemeOfTheDay(array) {
    array.then(memes => {
            let day = new Date().getDate()
            render(meme_image, "url", memes[day].url)
            render(name, "text", memes[day].name)
        }
    )
}

// Función Meme Random
function getRandomMeme(array) {
    array.then(
        function(memes) {
            let randomNumber = Math.round(Math.random() * memes.length-1)
            render(meme_image, "url", memes[randomNumber].url)
            render(name, "text", memes[randomNumber].name)
            render(h1, "text", "Random Meme!")
            render(button, "text", "Get another random Meme!")
        }
    )
}

// Función que renderiza en DOM
function render (domElement, type, info) {
    if(type == "url") {
        domElement.src = info
    } else if (type == "text") {
        domElement.textContent = info
    } else {
        console.log("Falta el atributo")
    } 
}

// Botón Random Meme
button.addEventListener("click", function(){
    getRandomMeme(memeArray)
} )

//Inicializar
getMemeOfTheDay(memeArray)
