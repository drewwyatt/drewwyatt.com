import * as React from 'react';

import { Col, Row } from 'react-bootstrap';

import AboutMe from 'components/sections/about-me';
import Contact from 'components/sections/contact';
import Experience from 'components/sections/experience';
import Header from 'components/sections/header';
import Projects from 'components/sections/projects';
import Skills from 'components/sections/skills';

class App extends React.Component<void, void> {
    render(): JSX.Element {
        return (
            <div className="container">
                <Header />
                <Row>
                    <Col xs={12} sm={7}>
                        <AboutMe />
                        <Experience />
                        <Projects />
                    </Col>
                    <Col xs={12} sm={5}>
                        <Contact />
                        <Skills />
                    </Col>
                </Row>
            </div>
        );
    }
};

export default App;