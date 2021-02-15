import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const SucculentsPage = () => (
  <div>
    <h1>Succulents Page</h1>
  </div>
  );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/succulents' component={SucculentsPage} />
      </Switch>  
      
    </div>
  );
}

export default App;
