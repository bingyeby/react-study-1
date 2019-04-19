import React from 'react'
import PropTypes from 'prop-types'
import ScreenShot from './screenShot'
import _ from 'lodash'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgSrcList: [],
    }
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>
      <h1>12</h1>

      <ScreenShot onDone={(data) => {
        this.setState({
          imgSrcList: data,
        })
      }}></ScreenShot>
      {
        _.map(this.state.imgSrcList, (n, i) => {
          return <img key={i} src={n} width={100} />
        })
      }


    </div>)
  }
}

Test.propTypes = {
  dispatch: PropTypes.func,
}

export default Test
