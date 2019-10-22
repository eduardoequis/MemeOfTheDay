import { endpoint, traerMemes } from './api.js'

let imagen_meme = document.getElementsByClassName("meme")[0]
let h1 = document.querySelector("h1")
let button = document.querySelector("button")
let name = document.querySelector(".name")

  // Re-Estructuramos el objeto meme.
function reestructurarArray (arrayMemes) {

    let arrayMemeReconstruc = arrayMemes.map( meme => {
        const {id, name, width, height, url} = meme
        return {id, name, width, height, url}
        }) 

    return arrayMemeReconstruc

}

  // Filtramos según criterio de medida
function filtrar_y_Ordenar_Memes (array) {

    let memesMenos500x500 = array.filter(function(meme){
        if(meme.width >= 500 && meme.height >= 500){
            return meme
        }
    })

     memesMenos500x500.sort(function compare(a, b) {
        return parseInt(a.id) - parseInt(b.id);
      })
     
    console.log("organizados")
    console.dir(memesMenos500x500)
    return memesMenos500x500
}

function getMemeOfTheDay(arrayDeMemes) {

    let dia = new Date().toJSON().slice(8,10)
    console.log("El meme del día es...")
    console.log(arrayDeMemes[parseInt(dia)])
   // esto se puede poner más bonito.
    render(imagen_meme, "url", arrayDeMemes[parseInt(dia)].url)
    return arrayDeMemes[parseInt(dia)]
}

function getRandomMeme(arrayDeMemes) {

    let numeroRandom = Math.round(Math.random() * arrayDeMemes.length-1)
    console.log("El meme random es... " + numeroRandom)
    console.log(arrayDeMemes[numeroRandom])
    render(imagen_meme, "url", arrayDeMemes[numeroRandom].url)
    render(name, "text", arrayDeMemes[numeroRandom].name)
    render(h1, "text", "Random Meme!")
    render(button, "text", "Get another random Meme!")
    return arrayDeMemes[numeroRandom]
}

//Trae al meme del día
traerMemes(endpoint, reestructurarArray, filtrar_y_Ordenar_Memes, getMemeOfTheDay)


function render (domElement, type, info) {

    if(type == "url") {
        domElement.src = info
    } else if (type == "text") {
        domElement.textContent = info
    } else {
        console.log("Falta el atributo")
    } 
}

// Random Meme
button.addEventListener("click", function(){
    traerMemes(endpoint, reestructurarArray, filtrar_y_Ordenar_Memes, getRandomMeme)
} )



