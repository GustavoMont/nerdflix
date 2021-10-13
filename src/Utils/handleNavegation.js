let opacity = 0
export const handleBackgroundColor = () => {
    const bar = document.querySelector('nav')
    const under = document.getElementById('outdoor-title')
    if (!(bar && under)) {
        return
    }
    const black = under.getBoundingClientRect().top - bar.getBoundingClientRect().bottom < 0
    const transparent = under.getBoundingClientRect().top > 180
    if (black) {
        bar.style.backgroundColor = `rgba(0, 0, 0, 1)`
        opacity= -1 ;
    }
    else{
        opacity += 0.02;
        bar.style.backgroundColor = `rgba(0, 0, 0, ${transparent ? 0 : opacity})`
    }       
};

export const goBack = (history) => history.push('/');