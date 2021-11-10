const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'




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
            type: 'tv',
            // get only tv shows
            lista:  await baseFetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765&language=pt-BR`) 
        },
        {
            slug: 'hype',
            title: 'Hype',
            type: 'movie',
            // get popularity sci-fi movies
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=878`)
        },
        {
            slug: 'action',
            title: 'Ação',
            type: 'movie',
            // get action movies and sci-fi movies
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&&with_genres=878,16`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            type: 'movie',
            // only comedy and sci-fi movies
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&&with_genres=878,35`)
        },
        {
            slug: 'classics',
            title: 'Clássicos',
            type: 'movie',
            // only old sci-fi movies
            lista: await baseFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=release_date.asc,popularity.desc&with_genres=878`)
        },
    ]
}

// this function get information about an especific movie/tv-show
export async function getTvInfo(id, type="tv") {
    const req = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=pt-BR`)
    const info = await req.json();
    return info
}