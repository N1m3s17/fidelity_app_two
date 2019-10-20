import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import progress_bar_seven from '../progress_bar_seven.png';
import frank_etf_choice from '../frank_etf_choice.PNG';
import lil_piggy from  '../lil_piggy.png';
import { Row, Col, Button, Card, CardImg, CardBody, CardDeck } from 'reactstrap';
import './Choose_ETF.css';

class Choose_ETF extends Component {
  render(){
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
              <span className="etf_choice_span"><Button outline tag={Link} to="etfselected" color="secondary">RRSP</Button></span>
              </CardBody>
            </Card>
          <Card>
            <CardImg top className="lil_piggy" src={lil_piggy} alt="lil_piggy" />
              <CardBody>
              <span className="etf_choice_span"><Button outline color="secondary">TFSA</Button></span>
              </CardBody>
            </Card>
          <Card>
            <CardImg top className="lil_piggy" src={lil_piggy} alt="lil_piggy" />
              <CardBody>
              <span className="etf_choice_span"><Button outline color="secondary">Not-Registered</Button></span>
              </CardBody>
            </Card>
            </CardDeck>
     
        </div>


      </div>
    )
  }
}
export default Choose_ETF;
