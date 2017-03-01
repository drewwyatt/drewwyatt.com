import * as React from 'react';
import Box from 'components/blocks/box';
const skills = require('../../data/buzzwords.json') as string[];

const Skill = ({ children }: React.HTMLAttributes<any>) => <div className="hobby">{children}</div>;
const Skills = () => (
    <Box>
        <h2>Things I Know About</h2>
        {skills.map((s, idx) => <Skill key={`skill_${idx}`}>{s}</Skill>)}
    </Box>
);
export default Skills;