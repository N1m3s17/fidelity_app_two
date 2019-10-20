import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import progress_bar_seven from '../progress_bar_seven.png';
import frank_etf_choice from '../frank_etf_choice.PNG';
import lil_piggy from  '../lil_piggy.png';
import { UncontrolledPopover, Popover, PopoverHeader, PopoverBody, Button, Card, CardImg, CardBody, CardDeck } from 'reactstrap';
import './Choose_ETF.css';

const Choose_ETF = (props) => {
    return (
      <div className="container">
        <div className="mer_pagetwo_body">
          <div className="choose_etf_progress_bar">
            <img className="progress_bar_seven" src={progress_bar_seven} alt="progress_bar_seven" />
          </div>
          <div className="frank_choice_div">
            <img className="frank_etf_choice" src={frank_etf_choice} alt="frank_etf_choice" />
          </div>
          <p className="etf_choice_header">Drag and Drop the ETF into the desired piggy bank!</p>
          <CardDeck>
          <Card className="piggyCard">
            <CardImg top className="lil_piggy" src={lil_piggy} alt="lil_piggy" />
              <CardBody>
              <span className="etf_choice_span"><Button id="PopoverClick" outline color="secondary">RRSP</Button></span>
              <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
              <PopoverHeader>RRSP</PopoverHeader>
              <PopoverBody>RRSP stands for Registerd Retirement Savings Plan.  It's an account 
                  specifically for your retirement goals.  The main benefit of RRSP's is that tax on RRSP 
                  contributions is deferred until retirement.</PopoverBody>
              </UncontrolledPopover>
              </CardBody>
            </Card>
          <Card>
            <CardImg top className="lil_piggy" src={lil_piggy} alt="lil_piggy" />
              <CardBody>
              <span className="etf_choice_span"><Button id="PopoverClick2" outline color="secondary">TFSA</Button></span>
              <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick2">
              <PopoverHeader>TFSA</PopoverHeader>
              <PopoverBody>The Tax-Free Savings Account (TFSA) is an account that does not apply taxes on any contributions, interest earned, dividends, or capital gains, and can be withdrawn tax free.</PopoverBody>
              </UncontrolledPopover>
              </CardBody>
            </Card>
          <Card>
            <CardImg top className="lil_piggy" src={lil_piggy} alt="lil_piggy" />
              <CardBody>
              <span className="etf_choice_span"><Button id="PopoverClick3" outline color="secondary">Not-Registered</Button></span>
              <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick3">
              <PopoverHeader>Non-Registered</PopoverHeader>
              <PopoverBody>Non-registered accounts are taxable investment accounts but have no contribution limits.</PopoverBody>
              </UncontrolledPopover>
              </CardBody>
            </Card>
            </CardDeck>

            <Button className="choose_next_button" outline tag={Link} to="/frankbank" color="secondary">Next</Button>
     
        </div>


      </div>
    )
  }
export default Choose_ETF;
