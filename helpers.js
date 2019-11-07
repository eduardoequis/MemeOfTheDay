 // Re-Estructuramos el objeto meme.
 function arrayStructure (array) {

    return array.map( meme => {
        const {id, name, width, height, url} = meme
        return {id, name, width, height, url}
        }) 
    
}

  // Filtramos según criterio de medida
function filterBySize (array, size) {

  return array.filter(meme => {
        if(meme.width >= size && meme.height >= size){
            return meme
        }
    })
     
}

function orderByID (array) {

    return array.sort(function compare(a, b) {
        return parseInt(a.id) - parseInt(b.id);
      })

}

export {arrayStructure, filterBySize, orderByID}