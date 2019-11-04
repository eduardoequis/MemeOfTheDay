import { endpoint, traerMemes } from './api.js'
import { reestructurarArray, filtrarPorMedida, ordernarporId} from './helpers.js'

let arrayMemes = 
traerMemes(endpoint)
.then(reestructurarArray)
.then(memes => filtrarPorMedida(memes,500))
.then(ordernarporId)
.then(memes => {return memes})


// Elementos DOM
let imagen_meme = document.getElementsByClassName("meme")[0]
let h1 = document.querySelector("h1")
let button = document.querySelector("button")
let name = document.querySelector(".name")


// Función Meme del Día
function getMemeOfTheDay(array) {
    array.then(memes => {
            let dia = new Date().getDate()
            render(imagen_meme, "url", memes[dia].url)
            render(name, "text", memes[dia].name)
        }
    )
}

// Función Meme Random
function getRandomMeme(array) {
    array.then(
        function(memes) {
            let numeroRandom = Math.round(Math.random() * memes.length-1)
            console.log("El meme random es... " + numeroRandom)
            render(imagen_meme, "url", memes[numeroRandom].url)
            render(name, "text", memes[numeroRandom].name)
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
    getRandomMeme(arrayMemes)
} )

//Inicializar
getMemeOfTheDay(arrayMemes)
