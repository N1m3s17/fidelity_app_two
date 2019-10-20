import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import frank_logo from '../frank_logo.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render(){
    return (
      <div className="container">
        <div className="home_body">
            <div className="frank_img_div">
            <img className="frank_logo" src={frank_logo} alt="frank_log" />
            </div>
            <p className="home_body_header">Learn to Invest with Frank</p>
            <span className="home_button_span"><Button tag={Link} to="/pagetwo" color="info">Continue</Button></span>
        </div>


      </div>
    )
  }
}
export default Home;
