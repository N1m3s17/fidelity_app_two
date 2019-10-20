import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import frank_logo from '../frank_logo.png';
import progress_bar_two from '../progress_bar_two.png';
import { Button } from 'reactstrap';
import './Pagethree.css';

class Pagethree extends Component {
  render(){
    return (
      <div className="container">
        <div className="pagethree_body">
          <img className="progress_bar_two" src={progress_bar_two} alt="progress_bar_two" />
          <p className="page_three_header">The type of investment fund that you can purchase online is called ETF.</p>
          <p className="page_three_text_body">Would you like to learn what an ETF is with Frank?</p>
          <div className="pagethree_frank_img_div">
          <img className="pagethree_frank_logo" src={frank_logo} alt="frank_log" />
          <span className="pagethree_button_span"><Button tag={Link} to="/pagefour" color="info">Continue</Button></span>
        </div>
        </div>


      </div>
    )
  }
}
export default Pagethree;
