import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import etf_pic_three from '../etf_pic_three.png';
import progress_bar_five from '../progress_bar_five.png';
import { Button } from 'reactstrap';
import './Pagesix.css';

class Pagesix extends Component {
  render(){
    return (
      <div className="container">
        <div className="pagesix_body">
          <img className="progress_bar_five" src={progress_bar_five} alt="progress_bar_five" />
          <p className="page_six_header">Can you help Frank figure out what the E in ETF stands for?</p>
          <div className="etf_pic_one_div">
          <img className="etf_pic_three" src={etf_pic_three} alt="etf_pic_three" />
          <div className="pagesix_button_span">
          <Button className="pagesix_button" outline color="info" size="lg">Fun</Button>{' '}
          <Button className="pagesix_button" outline tag={Link} to="/pageseven" color="info" size="lg">Fund</Button>{' '}
          <Button className="pagesix_button" outline color="info" size="lg">Finding</Button>{' '}
          <Button className="pagesix_button" outline color="info" size="lg">Foundry</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default Pagesix;
