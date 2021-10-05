import React, { useEffect, useState } from 'react';
import { getContent } from './Utils/getContent'
import MovieList from './Components/MovieList'
import { GlobalStyle } from './styles'
import Outdoor from './Components/Outdoor';


function App() {
  const [content, setContent] = useState([])
  const [pic, setPic] = useState(null)


  useEffect(() =>{
    (async ()=>{
      const conteudo = await getContent()
      setContent(conteudo)
      setPic(conteudo[0].lista[0].backdrop_path)
    })()
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <>
        {pic && <Outdoor pic={pic} />}
          {
            content.map(item => <MovieList content={item} key={item.title}/>)
          }
        </>
      </div>
    </>
  );
}

export default App;
