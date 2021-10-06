import React, { useEffect, useState } from 'react';
import { getContent, getTvInfo } from './Utils/getContent'
import MovieList from './Components/MovieList'
import { GlobalStyle } from './styles'
import Outdoor from './Components/Outdoor';


function App() {
  const [content, setContent] = useState([])
  const [outdoorInfo, setOutdoorInfo] = useState(null)

  const randomGenerator = (length) => Math.floor( Math.random() * (length - 1)) 

  useEffect(() =>{
    (async ()=>{
      const conteudo = await getContent()
      setContent(conteudo)
      const index = randomGenerator(conteudo[0].lista.length)
      const info = await getTvInfo(conteudo[0].lista[index].id)
      setOutdoorInfo(info)
    })()
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <>
        {outdoorInfo && <Outdoor content={outdoorInfo} />}
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
