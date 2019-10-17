fetch('https://api.imgflip.com/get_memes')
.then(response => {if (response.status === 200){
        console.log("Successful request!") 
    }else {
        console.log(`Oops, we get a ${response.status} error`)
    }
    return response.json()
})
.then(info => {

    console.log(info.data.memes)

    let nuevoArray = []

    info.data.memes.forEach(meme => {
        
        let newMemeItem = {
            id: meme.id,
            name: meme.name,
            width: meme.width,
            height: meme.height,
            url: meme.url,
        }

        nuevoArray.push(newMemeItem)

    });

    console.log(nuevoArray)

})