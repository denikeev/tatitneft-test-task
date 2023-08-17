import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import urls from '../../urls.js';

const Header = () => (
  <Navbar bg="white" expand="lg" className="shadow-sm">
    <Container>
      <Row className="w-100 justify-content-center align-items-center">
        <Col xl={10}>
          <Navbar.Brand as={Link} to={urls.root}>
            <h1 className="d-inline-block">Статьи</h1>
          </Navbar.Brand>
        </Col>
      </Row>

    </Container>
  </Navbar>
);

export default Header;
