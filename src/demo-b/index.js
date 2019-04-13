import React, {Component} from 'react';
import {render} from 'react-dom';

import 'antd/dist/antd.css';

import './index.less'
import TableScroll from './TableScroll.js';


class Counter extends Component {
    render() {
        return <div>
            <TableScroll></TableScroll>{/*管理层在股东单位任职情况*/}
        </div>
    }
}

render(<Counter initialCount='1'/>, document.getElementById('root'));
