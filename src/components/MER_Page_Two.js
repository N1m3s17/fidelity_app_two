import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mer_pic_two from '../mer_pic_two.png';
import progress_bar_five from '../progress_bar_five.png';
import { Button } from 'reactstrap';
import './MER_Page_two.css';

class MER_Page_Two extends Component {
  render(){
    return (
      <div className="container">
        <div className="mer_pagetwo_body">
          <img className="progress_bar_five" src={progress_bar_five} alt="progress_bar_five" />
          <p className="MER_pagetwo_header">Each investment fund like an ETF has expenses that Frank needs to 
            cover every year.  What is this called?</p>
          <div className="mer_pic_one_div">
          <img className="mer_pic_two" src={mer_pic_two} alt="mer_pic_one" />
          <div className="MER_pagetwo_button_span">
          <Button className="MER_pagetwo_button" outline color="info" size="lg">Energy</Button>{' '}
          <Button className="MER_pagetwo_button" outline color="info" size="lg">Emotional</Button>{' '}
          <Button className="MER_pagetwo_button" outline tag={Link} to="/mer_page_three" color="info" size="lg">Expenses</Button>{' '}
          <Button className="MER_pagetwo_button" outline color="info" size="lg">Engage</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default MER_Page_Two;
