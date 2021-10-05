const API_KEY = 'f0cef635a1ca4f75ff67e3684912e388'
const BASE_URL = 'https://api.themoviedb.org/3'


/*
    - Series (Netflix)
    - Hype (trendings)
    - Ação (genre_id = 28)
    - Comédia  (genre_id = 35)
    - Clássicos (filter)
*/
async function baseFetch(url){
    const req = await fetch(url)  
    const data = await req.json()           
    
    return data.results
}

export const getContent = async () => {
    return [
        {
            slug: 'recomend',
            title: 'Para Você',
            lista:  await baseFetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765`)
        },
        {
            slug: 'hype',
            title: 'Hype',
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=878`)
        }
    ]
}