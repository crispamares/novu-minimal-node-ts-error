import * as React from 'react';
import { render } from 'react-dom';

import {
    NovuProvider,
    PopoverNotificationCenter
} from '@novu/notification-center';

const testing = setTimeout(() => console.log("FIRE!"), 100);

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = render(<h1>Hello, world</h1>, document.getElementById('app'));