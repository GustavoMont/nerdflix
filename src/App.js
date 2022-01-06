import React from 'react';
import Rotas from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <div className="App">
          <GlobalStyle />
          <Rotas />
          <Footer />
      </div>
    </>
  );
}

export default App;
