import React, { Component } from 'react';
import { render } from 'react-dom';


import Test6 from './Test6'
import Test7 from './Test7'


class Counter extends Component {
    render() {
        return <div>
            <Test6></Test6>
            <Test7></Test7>
        </div>
    }
}

render(<Counter initialCount='1' />, document.getElementById('root'));
