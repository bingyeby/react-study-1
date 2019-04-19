import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.less'
import TableScroll from './TableScroll.js';


export default class Counter extends Component {
    render() {
        return <div>
            <TableScroll></TableScroll>
        </div>
    }
}

// render(<Counter initialCount='1'/>, document.getElementById('root'));
