/* 任职情况 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './GradeOfShareHolderStyle.less'

export default class GradeOfShareHolder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles['tableOuter']}>
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>评级</th>
                    <th>评级展望</th>
                    <th>评级机构</th>
                    <th>评级时间</th>
                </tr>
                <tr>
                    <th>外部评级</th>
                    <td>
                        <span className={styles.statusUp}>AAA</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>2018/3/29</span>
                    </td>
                </tr>
                <tr>
                    <th>隐含评级</th>
                    <td>
                        <span className={styles.statusNormal}>AAA</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>2018/3/29</span>
                    </td>
                </tr>
                <tr>
                    <th rowSpan={3}>国外评级</th>
                    <td>
                        <span className={styles.statusUp}>AAA</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>2018/3/29</span>
                    </td>
                </tr>
                <tr>
                    <th style={{display:'none'}}></th>
                    <td>
                        <span className={styles.statusUp}>AAA</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>2018/3/29</span>
                    </td>
                </tr>
                <tr>
                    <th style={{display:'none'}}></th>
                    <td>
                        <span className={styles.statusUp}>AAA</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>xxx</span>
                    </td>
                    <td>
                        <span>2018/3/29</span>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>);
    }
}

// render(<SituationOfOffice/>, document.getElementById(''));

