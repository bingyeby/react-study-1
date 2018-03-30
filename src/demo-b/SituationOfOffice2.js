/* 控股股东评级 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './SituationOfOffice2Style.less'

export default class SituationOfOffice extends Component {
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
        this.setState({
            scrollBarStyle: {
                width: 8,
                height: scrollBarStyleH
            }
        });
        scrollContain.onscroll = (e) => {
            console.log(e.target.scrollTop, e.target.scrollTop * scrollContentH / scrollContainH);
            let topMax = (scrollContentH - scrollContainH) * scrollContainH / scrollContentH + e.target.scrollTop;
            let topChange = e.target.scrollTop * scrollContainH / scrollContentH + e.target.scrollTop;
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
        return (<div className={styles['tableOuter']}>
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
                        Array(10).fill(
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

        </div>);
    }
}

// render(<SituationOfOffice/>, document.getElementById(''));

