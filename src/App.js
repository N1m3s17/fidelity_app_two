import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';
import Pagefour from './components/Pagefour';
import Pagefive from './components/Pagefive';
import Pagesix from './components/Pagesix';
import Pageseven from './components/Pageseven';
import MER_Page_One from './components/MER_Page_One';
import MER_Page_Two from './components/MER_Page_Two';
import MER_Page_Three from './components/MER_Page_Three';
import MER_def_Page from './components/MER_def_Page';
import Choose_ETF from './components/Choose_ETF';
import ETF_Selected from './components/ETF_Selected';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Navbar />
        
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pagetwo' component={Pagetwo} />
        <Route exact path='/pagethree' component={Pagethree} />
        <Route exact path='/pagefour' component={Pagefour} />
        <Route exact path='/pagefive' component={Pagefive} />
        <Route exact path='/pagesix' component={Pagesix} />
        <Route exact path='/pageseven' component={Pageseven} />
        <Route exact path='/mer_page_one' component={MER_Page_One} />
        <Route exact path='/mer_page_two' component={MER_Page_Two} />
        <Route exact path='/mer_page_three' component={MER_Page_Three} />
        <Route exact path='/mer_def_page' component={MER_def_Page} />
        <Route exact path='/chooseetf' component={Choose_ETF} />
        <Route exact path='/etfselected' component={ETF_Selected} />
        </Switch>
      </div>
    )
  }
}
export default App;
