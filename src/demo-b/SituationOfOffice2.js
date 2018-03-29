/* 控股股东评级 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import styles from './SituationOfOffice2Style.less'

export default class SituationOfOffice extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('this.test',this.test);
        
    }

    render() {
        return (<div className={styles['tableOuter']}>
            <div className={styles.tableOuterContent}>
                <table>
                    <thead>
                        <tr>
                            <th>任职人员名称</th>
                            <th>在本公司担任的职务</th>
                            <th>股东单位名称</th>
                            <th>在股东单位担任的职务</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <div className={styles.test} ref={i => this.test = i}></div>
                    </tbody>
                </table>
            </div>

        </div>);
    }
}

// render(<SituationOfOffice/>, document.getElementById(''));

