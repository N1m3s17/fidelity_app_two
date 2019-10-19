import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Navbar />
        
      </div>
    )
  }
}
export default App;
