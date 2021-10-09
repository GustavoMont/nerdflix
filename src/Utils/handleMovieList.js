export const imageChecker = (url ,src, alt) => src ? 
    (<img src={`${url}/${src}`} alt={alt} />) :
    (<div className="alternate"><p>{alt}</p></div>)

export const handleLeft = (x, setX) =>{
    const step = Math.floor(window.innerWidth / 2)
    let newPos = x + step 
    if (newPos > 0) {
        newPos = 0
    }
    setX(newPos)
}

export const handleRight = (x, setX, lista) => {
    const step = Math.floor(window.innerWidth / 2)
    const sizeList = lista.length * 180
    const limit = window.innerWidth - sizeList
    let newPos = x - step 
    if ( limit > newPos) {
        newPos = limit - 64
    }
    setX(newPos)
}