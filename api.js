// Get memes from API

const endpoint = 'https://api.imgflip.com/get_memes'

function getMemes(api) {

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

export {endpoint, getMemes}