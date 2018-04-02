/* 股东任职 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'


import styles from './ShareholderRatingStyle.less'

class ShareholderRating extends Component {
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
        let scrollContentH = scrollContain.querySelectorAll('tr').length * 30;
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
            // console.log(e.target.scrollTop, e.target.scrollTop * scrollContentH / scrollContainH);
            let topMax = (scrollContentH - scrollContainH) * scrollContainH / scrollContentH + e.target.scrollTop;
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
            <div className='moduleTitle'>管理层在股东单位任职情况</div>
            <div className={styles.tableOuter}>
                <div className={styles.tableOuterContent} ref='tableOuterContent'>
                    <table>
                        <thead>
                        <tr>
                            <th>任职人员名称</th>
                            <th>在本公司担任的职务</th>
                            <th>股东单位名称</th>
                            <th>在股东单位担任的职务</th>
                        </tr>
                        </thead>
                        <tbody ref='scrollContain'>
                        <tr>
                            <td>xx xx xx</td>
                            <td>xx xx xx</td>
                            <td>xx xx xx</td>
                            <td>xx xx xx</td>
                        </tr>
                        {
                            Array(15).fill(
                                <tr>
                                    <td>xx xx xx</td>
                                    <td>xx xx xx</td>
                                    <td>xx xx xx</td>
                                    <td>xx xx xx</td>
                                </tr>
                            )
                        }
                        <div className={styles.scrollBar} ref='scrollBar' style={this.state.scrollBarStyle}></div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
    }
}

ShareholderRating.propTypes = {};
// export default connect(() => ({}))(ShareholderRating.js)
export default ShareholderRating

