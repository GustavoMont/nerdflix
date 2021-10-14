let opacity = 0 // this variable controll the opcaity of Navegation Component
export const handleBackgroundColor = () => {
    const bar = document.querySelector('nav') // get the Navegation component
    const under = document.getElementById('outdoor-title') // it's the title of Movie
    if (!(bar && under)) { // if bar neither title was renderezied, the don't execute the function
        return
    }
    const black = under.getBoundingClientRect().top - bar.getBoundingClientRect().bottom < 0 // condition to stop to increment opacity
    const transparent = under.getBoundingClientRect().top > 180 // condition to stay tranparent
    if (black) {
        bar.style.backgroundColor = `rgba(0, 0, 0, 1)`
        opacity= -1 ;
    }
    else{
        opacity += 0.02;
        bar.style.backgroundColor = `rgba(0, 0, 0, ${transparent ? 0 : opacity})` 
    }       
};
// function to return to home page
export const goBack = (history) => history.push('/');