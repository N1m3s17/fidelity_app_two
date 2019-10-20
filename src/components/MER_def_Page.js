import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mer_def_pic from '../mer_def_pic.PNG';
import progress_bar_six from '../progress_bar_six.png';
import { Button } from 'reactstrap';
import './MER_def_page.css';

class MER_def_Page extends Component {
  render(){
    return (
      <div className="container">
        <div className="pageseven_body">
          <img className="progress_bar_six" src={progress_bar_six} alt="progress_bar_six" />
          <p className="mer_def_page_header">Great!  MER Stands for Management Expense Ratio.</p>
          <div className="mer_def_pic_div">
          <img className="mer_def_pic" src={mer_def_pic} alt="mer_def_pic" />
          </div>
          <p className="mer_def_page_header">On the Fidelity site, each ETF has it's own MER.  You can find an 
          example <a href="#">here</a>
          </p>
          <p className="mer_def_page_header">Do you know where to put your ETF?</p>
          <div className="mer_def_button_span">
          <Button className="merdef_button" outline tag={Link} to="/chooseetf" color="info" size="lg">Yes</Button>{' '}
          <Button className="merdef_button" outline color="info" size="lg">No</Button>{' '}
          </div>
        </div>


      </div>
    )
  }
}
export default MER_def_Page;
