import React, {Component} from 'react';
import {render} from 'react-dom';

import 'antd/dist/antd.css';

import './index.less'
import TableScroll from './TableScroll.js';


class Counter extends Component {
    render() {
        return <div>
            <TableScroll></TableScroll>
        </div>
    }
}

render(<Counter initialCount='1'/>, document.getElementById('root'));
