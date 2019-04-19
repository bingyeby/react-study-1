import React, { Component } from 'react';
import { render } from 'react-dom';

// 用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props 读取；
// 而要定义一个 onChange事件的回调函数，通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况
export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Hello"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
                <p>{this.state.value}</p>
            </div>
        );
    }
};

