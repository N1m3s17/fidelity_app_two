import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import final_progress_bar from '../final_progress_bar.png';
import check_list from '../check_list.png';
import { Button  } from 'reactstrap';
import './Check_List.css';

const Check_List = (props) => {
    return (
      <div className="container">
        <div className="frank_last_body">
          <div className="frank_last_progress_bar">
            <img className="final_progress_bar" src={final_progress_bar} alt="final_progress" />
          </div>
          <p className="check_list_header">In order to invest in an ETF, you'll need to setup one of three 
          accounts mentioned.  This checklist lists all the things you will need to sucessfully setup you investment fund.</p>
      </div>
      <div className="check_list_div">
            <img className="check_list" src={check_list} alt="check list" />
          </div>

          <Button className="check_list_button" outline color="info">Download</Button>
          <Button className="check_list_button" outline color="info">Print a Copy</Button>
      </div>
    )
  }
export default Check_List;
