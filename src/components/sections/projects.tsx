import * as React from 'react';
import Box from 'components/blocks/box';
import Project from 'models/project';
const projects = require('../../data/projects.json') as Project[];

const Listing = ({ name, description, link }: Project) => (
    <li>
        <a href={link} target="_blank" className="description pull-right">
            <h3>{name}</h3>
            <p>{description}</p>
        </a>
    </li>
);

const Projects = () => (
    <Box>
        <h2>Things I'm Proud Of</h2>
        <ul id="education" className="clearfix">
            {projects.map((p, idx) => <Listing key={`project_${idx}`} {...p} />)}
        </ul>
    </Box>
);

export default Projects;