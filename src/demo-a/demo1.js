import React, {Component} from 'react'

export default class Component1 extends Component {
  componentDidMount = () => {
    this.props.getChild(this)
  }

  childFun = (n) => {
    console.log(`childFun childFun run`);
  }

  render() {
    return (
      <div ref={'test'}>
        <h3>DEMO 1, render() and life cycle</h3>
        <p>Hello World!</p>
        <hr />
      </div>
    )
  }
}
