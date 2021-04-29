import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/home" exact component={Home}/>  
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;