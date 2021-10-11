export const handleOverview = (text) =>{
    if (text.length > 350) {
        text = text.slice(0, 347) + '...'
    }
    return text;
}