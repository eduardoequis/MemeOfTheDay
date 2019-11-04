// Trae memes de API

const endpoint = 'https://api.imgflip.com/get_memes'

/* function traerMemes(api, restructura, filtro, funcion_ejecutar) {

fetch(api)
.then(response => {if (response.status === 200){
        console.log("Successful request!") 
    }else {
        console.log(`Oops, we get a ${response.status} error`)
    }
    return response.json()
})
.then(info => restructura(info.data.memes))
.then(array => filtro(array))
.then (array => funcion_ejecutar(array))
}

// agregar el .catch()

*/

function traerMemes(api) {

    return fetch(api)
    .then(response => {if (response.status === 200){
            console.log("Successful request!") 
        }else {
            console.log(`Oops, we get a ${response.status} error`)
        }
        return response.json()
        
    })
    .then(json => json.data.memes)
    .catch(error => console.error(error.message));

}

export {endpoint, traerMemes}