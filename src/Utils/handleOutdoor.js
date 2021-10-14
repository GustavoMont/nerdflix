// this function controls the maximum character's on overview. 
export const handleOverview = (text) =>{
    if (text.length > 350) {
        text = text.slice(0, 347) + '...'
    }
    return text;
}
// This function return only a year about a movie/tv show
export const getYear = (dataInteira) => dataInteira !== "" ? dataInteira.split('-')[0] : 'Data desconhecida';
