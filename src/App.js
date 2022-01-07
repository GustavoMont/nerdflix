import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle' // style to all page
import Rotas from './routes'; // App routes
import store from './reducer/AppReducer' // Store from redux
import { Provider } from 'react-redux' // Provide the redux context 
import Footer from './Components/Footer'; // App footer
function App() {
  return (
    <>
      <div className="App">
          <GlobalStyle />
          <Provider store={store} >
            <Rotas />
          </Provider>
          <Footer />
      </div>
    </>
  );
}

export default App;
