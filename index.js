fetch('https://api.imgflip.com/get_memes')
.then(response => {if (response.status === 200){
        console.log("Successful request!")
    }else {
        console.log(`Oops, we get a ${response.status} error`)
    }
})