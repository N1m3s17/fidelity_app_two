import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import progress_bar_one from '../progress_bar_one.png';
import bank_adivsor_pic from '../bank_advisor_pic.png';
import online_option from '../online_option.png';
import { Row, Col, Button, Card, CardImg, CardBody } from 'reactstrap';
import './Pagetwo.css';

class Pagetwo extends Component {
  render(){
    return (
      <div className="container">
        <div className="pagetwo_body">
          <img className="progress_bar_one" src={progress_bar_one} alt="progress_bar_one" />
          <p className="pagetwo_header">Would you like to purchase through</p>
          <Row>
            <Col sm="6">
          <Card>
            <CardImg top className="pagetwo_card_pic" src={bank_adivsor_pic} alt="Card image cap" />
              <CardBody>
              <span className="pagetwo_button_span"><Button outline color="secondary">Advisor</Button></span>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
          <Card>
            <CardImg top className="pagetwo_card_pic" src={online_option} alt="Card image cap" />
              <CardBody>
              <span className="pagetwo_button_span"><Button outline tag={Link} to="/pagethree" color="secondary">Online Option</Button></span>
              </CardBody>
            </Card>
          </Col>
          </Row>
        </div>


      </div>
    )
  }
}
export default Pagetwo;
