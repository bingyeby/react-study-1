import React, {Component} from 'react';
import styles from './TableScroll.less'

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollBarStyle: {
        width: 8,
        height: 0
      }
    }
  }

  componentDidMount() {
    let scrollContain = this.refs.scrollContain;
    let scrollBar = this.refs.scrollBar;
    let scrollContainH = scrollContain.clientHeight;
    let scrollContentH = scrollContain.scrollHeight;
    let scrollBarStyleH = scrollContainH * scrollContainH / scrollContentH;
    if (scrollBarStyleH > scrollContainH) {
      return;
    }
    this.setState({
      scrollBarStyle: {
        width: 8,
        height: scrollBarStyleH
      }
    });
    scrollContain.onscroll = (e) => {
      let topChange = e.target.scrollTop * scrollContainH / scrollContentH + e.target.scrollTop;
      if (scrollBarStyleH > scrollContainH) {
        return;
      }
      this.setState({
        scrollBarStyle: {
          width: 8,
          height: scrollBarStyleH,
          top: topChange
        }
      });

    }

  }

  render() {
    return (<div>
      <div className={styles.tableOuter}>
        <div className={styles.tableOuterContent} ref='tableOuterContent'>
          <table>
            <thead>
            <tr>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
            </thead>
            <tbody ref='scrollContain'>
            {
              Array(15).fill('').map((n, i) => {
                  return <tr key={i}>
                    <td>xx xx {i}</td>
                    <td>xx xx {i}</td>
                    <td>xx xx {i}</td>
                    <td>xx xx {i}</td>
                  </tr>
                }
              )
            }
            <tr className={styles.scrollBar} ref='scrollBar' style={this.state.scrollBarStyle}></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>);
  }
}

Com.propTypes = {};
export default Com

