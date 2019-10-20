import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import etf_definition_pic from '../etf_definition_pic.PNG';
import progress_bar_six from '../progress_bar_six.png';
import { Button } from 'reactstrap';
import './Pageseven.css';

class Pageseven extends Component {
  render(){
    return (
      <div className="container">
        <div className="pageseven_body">
          <img className="progress_bar_six" src={progress_bar_six} alt="progress_bar_six" />
          <p className="page_seven_header">Great!  ETF Stands for Exchange Trading Fund.</p>
          <div className="etf_def_pic_div">
          <img className="etf_definition_pic" src={etf_definition_pic} alt="etf_definition_pic" />
          </div>
          <p className="page_seven_header">Do you want to learn more about the costs associated with an ETF?</p>
          <div className="pageseven_button_span">
          <Button className="pageseven_button" outline tag={Link} to="/mer_page_one" color="info" size="lg">Yes</Button>{' '}
          <Button className="pageseven_button" outline color="info" size="lg">No</Button>{' '}
          </div>
        </div>


      </div>
    )
  }
}
export default Pageseven;
