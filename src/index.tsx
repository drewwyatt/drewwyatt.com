import * as React from 'react';

import { render } from 'react-dom';

const app = document.getElementById('app');

const Hello = () => <h1>Hello, World</h1>;
render(<Hello />, app);