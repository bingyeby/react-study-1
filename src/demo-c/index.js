import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'


// setState({count : ~~this.state.count+1})
export default class Test extends Component {

    constructor(props) {// 入参
        super(props);// 组件基类
    }

    render() {
        return <div>
            <Test1></Test1>
            <Test2></Test2>
            <Test3></Test3>
        </div>
    }
}

// render(<Test/>, document.getElementById("root"));