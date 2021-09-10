import React from 'react'
import  { BrowserRouter } from 'react-router-dom'
import RouterConfigs from './navigation/RouterConfigs'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import panierReducer from './redux/reducers/panier'

const store = createStore(panierReducer)

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfigs />
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
