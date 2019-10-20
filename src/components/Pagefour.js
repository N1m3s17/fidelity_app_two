import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import etf_pic_one from '../etf_pic_one.png';
import progress_bar_three from '../progress_bar_three.png';
import { Button } from 'reactstrap';
import './Pagefour.css';

class Pagefour extends Component {
  render(){
    return (
      <div className="container">
        <div className="pagefour_body">
          <img className="progress_bar_three" src={progress_bar_three} alt="progress_bar_three" />
          <p className="page_four_header">Can you help Frank figure out what the E in ETF stands for?</p>
          <div className="etf_pic_one_div">
          <img className="etf_pic_one" src={etf_pic_one} alt="etf_pic_one" />
          <div className="pagefour_button_span">
          <Button className="pagefour_button" outline tag={Link} to="/pagefive" color="info" size="lg">Exchange</Button>{' '}
          <Button className="pagefour_button" outline color="info" size="lg">Exclusion</Button>{' '}
          <Button className="pagefour_button" outline color="info" size="lg">Emoji</Button>{' '}
          <Button className="pagefour_button" outline color="info" size="lg">Electric</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default Pagefour;
