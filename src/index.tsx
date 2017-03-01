import * as React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const app = document.getElementById('app');
render(<AppContainer><App /></AppContainer>, app);

if ((module as any).hot) {
    (module as any).hot.accept('./app', () => {
        const AppComponent = require('./app').default;
        render(
            <AppContainer>
            <AppComponent />
            </AppContainer>,
            app
        );
    });
}