import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from 'components/blocks/box';
import Job from 'models/job';
const jobs = require('../../data/jobs.json') as Job[];

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
    <Box>
        <h2>Work Experience</h2>
        {jobs.map((j, idx) => <Listing key={`joblisting_${idx}`} {...j} />)}
    </Box>
);

export default Experience;