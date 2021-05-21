import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Cart from './views/Cart/Cart';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Admin from './views/Admin/Admin';
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
              <Route path="/profile" exact component={Profile}/> 
              <Route path="/carrito" exact component={Cart}/>
              <Route path="/admin" exact component={Admin}/>
              
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
