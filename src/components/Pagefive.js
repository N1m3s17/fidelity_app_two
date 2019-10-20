import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import etf_pic_two from '../etf_pic_two.png';
import progress_bar_four from '../progress_bar_four.png';
import { Button } from 'reactstrap';
import './Pagefive.css';

class Pagefive extends Component {
  render(){
    return (
      <div className="container">
        <div className="pagefive_body">
          <img className="progress_bar_four" src={progress_bar_four} alt="progress_bar_four" />
          <p className="page_five_header">Can you help Frank figure out what the E in ETF stands for?</p>
          <div className="etf_pic_one_div">
          <img className="etf_pic_two" src={etf_pic_two} alt="etf_pic_two" />
          <div className="pagefive_button_span">
          <Button className="pagefive_button" outline tag={Link} to="/pagesix" color="info" size="lg">Traded</Button>{' '}
          <Button className="pagefive_button" outline color="info" size="lg">Tariff</Button>{' '}
          <Button className="pagefive_button" outline color="info" size="lg">Terrific</Button>{' '}
          <Button className="pagefive_button" outline color="info" size="lg">Tyrannosarus</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default Pagefive;
