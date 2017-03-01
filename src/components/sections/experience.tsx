import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Job from 'models/job';
const jobs: Job[] = require('../../data/jobs.json');

const Listing = ({ where, year, profession, description }: Job) => (
    <div className="job clearfix">
        <Col xs={3}>
            <div className="where">{where}</div>
            <div className="year">{year}</div>
        </Col>
        <Col xs={9}>
            <div className="profession">{profession}</div>
            <div className="description">{description}</div>
        </Col>
    </div>
);

const Experience = () => (
    <Row>
        <Col xs={12} sm={7}>
            <h2>Work Experience</h2>
            {jobs.map((j, idx) => <Listing key={`joblisting_${idx}`} {...j} />)}
        </Col>
    </Row>
);

export default Experience;