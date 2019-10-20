import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mer_pic_three from '../mer_pic_three.png';
import progress_bar_five from '../progress_bar_five.png';
import { Button } from 'reactstrap';
import './MER_Page_three.css';

class MER_Page_Three extends Component {
  render(){
    return (
      <div className="container">
        <div className="mer_pagethree_body">
          <img className="progress_bar_five" src={progress_bar_five} alt="progress_bar_five" />
          <p className="MER_pagethree_header">Each investment fund like an ETF has expenses that Frank needs to 
            cover every year.  What is this called?</p>
          <div className="mer_pic_one_div">
          <img className="mer_pic_three" src={mer_pic_three} alt="mer_pic_three" />
          <div className="MER_pagethree_button_span">
          <Button className="MER_pagethree_button" outline color="info" size="lg">Radio</Button>{' '}
          <Button className="MER_pagethree_button" outline tag={Link} to="/mer_def_page"  color="info" size="lg">Ratio</Button>{' '}
          <Button className="MER_pagethree_button" outline color="info" size="lg">Runt</Button>{' '}
          <Button className="MER_pagethree_button" outline color="info" size="lg">Redistribution</Button>{' '}
          </div>
        </div>
        </div>


      </div>
    )
  }
}
export default MER_Page_Three;
