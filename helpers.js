 // Re-Estructuramos el objeto meme.
 function reestructurarArray (array) {

    return array.map( meme => {
        const {id, name, width, height, url} = meme
        return {id, name, width, height, url}
        }) 
    
}

  // Filtramos según criterio de medida
function filtrarPorMedida (array, medida) {

  return array.filter(meme => {
        if(meme.width >= medida && meme.height >= medida){
            return meme
        }
    })
     
}

function ordernarporId (array) {

    return array.sort(function compare(a, b) {
        return parseInt(a.id) - parseInt(b.id);
      })

}

export {reestructurarArray, filtrarPorMedida, ordernarporId}