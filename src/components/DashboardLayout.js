import React, { Component } from 'react';
import { Link } from "react-router-dom";
import url from '../utilities/url';
import { Container, Row, Col } from 'reactstrap';
import AppContext from '../utilities/context';

class DashboardLayout extends Component {
  static contextType = AppContext

  state = {
    //
  };

  render() {
    return (
      <Container>
        <h4>Worspace name</h4>
        <Row>
          <Col md="3">
            <p><Link to={url('workspace', {id: 1})}>Home</Link></p>
            <p><Link to={url('workspace', {id: 1}) + '/collections'}>Collections</Link></p>
            <p>Boards</p>
            <p>Tags</p>
          </Col>
          <Col md="9">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DashboardLayout
