import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    

    </div>
  );
}

export default App;
