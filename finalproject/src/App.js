import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Home from './views/Home/Home';
import Sesion from './views/Sesion/Sesion';
import Store from './views/Store/Store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/sesion" exact component={Sesion}/> 
              <Route path="/tienda" exact component={Store}/> 
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
