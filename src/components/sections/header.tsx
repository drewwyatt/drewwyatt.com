import * as React from 'react';

import { Col, Row } from 'react-bootstrap';

const Header = () => (
    <Row>
        <Col xs={12}>
            <div id="photo-header">
                <div id="photo">
                    <img src="/assets/drewwyatt.png" />
                </div>
                <div id="text-header">
                    <h1>Hello,<br /> my name is <span>Drew</span>, and I am a maker.</h1>
                </div>
            </div>
        </Col>
    </Row>
);

export default Header;