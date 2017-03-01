import * as React from 'react';
import AboutMe from 'components/sections/about-me';
import Experience from 'components/sections/experience';
import Header from 'components/sections/header';

class App extends React.Component<void, void> {
    render(): JSX.Element {
        return (
            <div id="container">
                <Header />
                <AboutMe />
                <Experience />
            </div>
        );
    }
};

export default App;