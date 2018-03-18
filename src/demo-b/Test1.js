import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


// setState({count : ~~this.state.count+1})
class Counter extends Component {
    static propTypes = { // 限制类型
        initialCount: PropTypes.number
    }
    static defaultProps = { // 默认值
        initialCount: 1
    }
    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = { count: this.props.initialCount };// 可以作为实例属性写在类内部
        this.addOne = this.addOne.bind(this);
    }
    addOne() {
        this.setState({ count: ~~this.state.count + 1 });
    }
    render() {
        return <div className="d6" onClick={this.addOne} tyle={{ color: 'blue' }}>{this.state.count}</div>;
    }
};
render(<Counter initialCount="1" />, document.getElementById("root"));