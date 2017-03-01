import * as React from 'react';
import Box from 'components/blocks/box';
import { Row, Col } from 'react-bootstrap';

const AboutMe = () => (
    <Row>
        <Col xs={12} sm={7}>
            <Box>
                <h2>About Me</h2>
                <p>I build software that gets people excited. At home and at work I like to create things that make life easier and more fun.</p>
                <p>I have experience with a variety of languages, frameworks, and mediums. I have built web APIs that serve data to thousands of users, a phone system that handles calls for a multi-million dollar company, and online reservation software for a state university. I work well with teams and am no stranger to agile development processes. I solve problems.</p>
            </Box>
        </Col>
    </Row>
);

export default AboutMe;