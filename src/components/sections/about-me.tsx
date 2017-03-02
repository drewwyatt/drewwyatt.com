import * as React from 'react';
import Box from 'components/blocks/box';
const __html = require('../../data/about.md');

const AboutMe = () => (
    <Box>
        <h2>About Me</h2>
        <div dangerouslySetInnerHTML={{ __html }} />
    </Box>
);

export default AboutMe;