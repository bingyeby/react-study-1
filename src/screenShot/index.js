import React from 'react'
import PropTypes from 'prop-types'
import ScreenShot from './screenShot'

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
      {
        Array(5).fill('').map((n, i) => {
          return <h1 key={i}>{i}</h1>
        })
      }
      <ScreenShot onDone={(data) => {
        this.setState({
          imgSrcList: data,
        })
      }}></ScreenShot>
      {
        this.state.imgSrcList && this.state.imgSrcList.map((n, i) => {
          return <img key={i} src={n} width={100} />
        })
      }

      {
        Array(15).fill('').map((n, i) => {
          return <h1 key={i}>{i}</h1>
        })
      }
    </div>)
  }
}

Test.propTypes = {
  dispatch: PropTypes.func,
}

export default Test
