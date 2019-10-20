import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mer_pic_one from '../mer_pic_one.png';
import progress_bar_five from '../progress_bar_five.png';
import { Button } from 'reactstrap';
import './MER_Page_one.css';

class MER_Page_One extends Component {
  render(){
    return (
      <div className="container">
        <div className="mer_pagetwo_body">
          <img className="progress_bar_five" src={progress_bar_five} alt="progress_bar_five" />
          <p className="MER_pageone_header">Each investment fund like an ETF has expenses that Frank needs to 
            cover every year.  What is this called?</p>
          <div className="mer_pic_one_div">
          <img className="mer_pic_one" src={mer_pic_one} alt="mer_pic_one" />
          <div className="MER_pageone_button_span">
          <Button className="MER_pageone_button" outline tag={Link} to="/mer_page_two" color="info" size="lg">Management</Button>{' '}
          <Button className="MER_pageone_button" outline color="info" size="lg">Manual</Button>{' '}
          <Button className="MER_pageone_button" outline color="info" size="lg">Many</Button>{' '}
          <Button className="MER_pageone_button" outline color="info" size="lg">Merry</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default MER_Page_One;
