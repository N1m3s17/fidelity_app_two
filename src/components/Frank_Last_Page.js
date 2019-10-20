import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import progress_bar_eight from '../progress_bar_eight.png';
import frank_bank from '../frank_bank.png';
import { Button  } from 'reactstrap';
import './Frank_Last_Page.css';

const Frank_Last_Page = (props) => {
    return (
      <div className="container">
        <div className="frank_last_body">
          <div className="frank_last_progress_bar">
            <img className="progress_bar_eight" src={progress_bar_eight} alt="progress_bar_eight" />
          </div>
          <p className="frank_last_header">Now you know the different ways to use an ETF, you can now go to your 
          financial institution to open an investment account</p>
          <p className="frank_last_header">Don't forget to ask the service representative for a demo of their trading platform</p>
      </div>
      <div className="frank_last_div">
            <img className="frank_bank" src={frank_bank} alt="frank_bank" />
          </div>

          <Button className="frank_bank_button" tag={Link} to="/checklist" color="info">View Setup Checklist</Button>
      </div>
    )
  }
export default Frank_Last_Page;
