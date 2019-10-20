import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import progress_bar_seven from '../progress_bar_seven.png';
import frank_etf_selected from '../frank_etf_selected.PNG';
import lil_piggy from  '../lil_piggy.png';
import { Button } from 'reactstrap';
import './ETF_Selected.css';

class ETF_Selected extends Component {
  render(){
    return (
      <div className="container">
        <div className="mer_pagetwo_body">
          <div className="choose_etf_progress_bar">
            <img className="progress_bar_seven" src={progress_bar_seven} alt="progress_bar_seven" />
          </div>
          <div className="frank_choice_div">
            <img className="frank_etf_selected" src={frank_etf_selected} alt="frank_etf_selected" />
          </div>
          <p className="frank_selected_header">Drag and Drop the ETF into the desired piggy bank!</p>
          <div className="content">
          <div className="selected_img">
            <img src={lil_piggy} className="selected_img" alt="selected piggy" />
            </div>
            <div class="comments">
            <div class="comment bubble">
              <p>RRSP stands for Registerd Retirement Savings Plan.  It's an account 
                  specifically for your retirement goals.  The main benefit of RRSP's is that tax on RRSP 
                  contributions is deferred until retirement.</p>
            </div>
          </div>
      </div>
        <Button className="next_button" outline color="secondary">Next</Button>
        </div>


      </div>
    )
  }
}
export default ETF_Selected;
