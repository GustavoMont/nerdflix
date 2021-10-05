import React, { useEffect, useState } from 'react';
import { getContent } from './Utils/getContent'
import MovieList from './Components/MovieList'

function App() {
  const [content, setContent] = useState([])

  useEffect(() =>{
    (async ()=>{
      const conteudo = await getContent()
      setContent(conteudo)
    })()
  }, [])

  return (
    <div className="App">
      <>
        {
          content.map(item => <MovieList content={item} />)
        }
      </>
    </div>
  );
}

export default App;
