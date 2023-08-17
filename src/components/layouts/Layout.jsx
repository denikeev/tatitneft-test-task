import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Layout = () => (
  <Container className="my-3">
    <Row className="justify-content-center align-items-center">
      <Col xl={10}>
        <Outlet />
      </Col>
    </Row>
  </Container>
);

export default Layout;
