import React, { useEffect, useState } from 'react';
import { getContent } from './Utils/getContent'
import MovieList from './Components/MovieList'
import { GlobalStyle } from './styles'
import Outdoor from './Components/Outdoor';


function App() {
  const [content, setContent] = useState([])
  const [outdoor, setOutdoor] = useState(null)

  const randomGenerator = (length) => Math.floor( Math.random() * (length - 1)) 

  useEffect(() =>{
    (async ()=>{
      const conteudo = await getContent()
      setContent(conteudo)
      const index = randomGenerator(conteudo[0].lista.length)
      setOutdoor(conteudo[0].lista[index].backdrop_path)
    })()
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <>
        {outdoor && <Outdoor pic={outdoor} />}
        <main style={{marginTop: -220}}>
          {
            content.map(item => <MovieList content={item} key={item.title}/>)
          }
        </main>
        </>
      </div>
    </>
  );
}

export default App;
