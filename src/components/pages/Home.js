import React from 'react';
import { Link } from "react-router-dom";
import url from '../../utilities/url';
import { Container, Row, Col } from 'reactstrap';

export default function Home() {
  return (
    <Container>
    <h3>Workspaces</h3>
    <ul>
      <li><Link to={url('workspace', {id: 1})}>My workspace</Link></li>
    </ul>
    </Container>
  )
}
