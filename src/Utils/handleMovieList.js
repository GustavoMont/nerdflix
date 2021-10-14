// this function check if the movie has an poster or not. If not it creates an card with the moie's film
export const imageChecker = (url ,src, alt) => src ? 
    (<img src={`${url}/${src}`} alt={alt} />) :
    (<div className="alternate"><p>{alt}</p></div>)
// this function make MovieList run to left.
export const handleLeft = (x, setX) =>{
    const step = Math.floor(window.innerWidth / 2)
    let newPos = x + step 
    // it prevents the movies pass all screen
    if (newPos > 0) {
        newPos = 0
    }
    setX(newPos)
}
// this function make MovieList run to rigth
export const handleRight = (x, setX, lista) => {
    const step = Math.floor(window.innerWidth / 2)
    const movieSize = window.innerWidth <= 700 ? 100 : 180 // the size of Movie Change if the screen is larger or not.
    const sizeList = lista.length * movieSize
    const limit = window.innerWidth - sizeList
    let newPos = x - step 
    // it prevents the movies pass all screen
    if ( limit > newPos) {
        newPos = limit - 64
    }
    setX(newPos)
}