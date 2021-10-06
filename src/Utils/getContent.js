const API_KEY = 'f0cef635a1ca4f75ff67e3684912e388'
const BASE_URL = 'https://api.themoviedb.org/3'


/*
    - Series (Netflix)
    - Hype (trendings)
    - Animação (genre_id = 16)
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
            slug: 'series',
            title: 'Séries',
            lista:  await baseFetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765&language=pt-BR`)
        },
        {
            slug: 'hype',
            title: 'Hype',
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=878`)
        },
        {
            slug: 'action',
            title: 'Ação',
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&&with_genres=878,16`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&&with_genres=878,35`)
        },
        {
            slug: 'classics',
            title: 'Clássicos',
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=release_date.asc,popularity.desc&with_genres=878`)
        },
    ]
}


export async function getTvInfo(id) {
    const req = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR`)
    const info = await req.json();
    return info
}