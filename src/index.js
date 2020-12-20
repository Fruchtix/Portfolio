import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'
import { GlobalStyles } from './global-styles'
import Theme from './providers/Theme'

render(
    <>
        <Theme>
            <GlobalStyles />
            <App />
        </Theme>
    </>,
    document.getElementById('root')
);
