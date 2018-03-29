/* 控股股东评级 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './SituationOfOfficeStyle.less'

export default class SituationOfOffice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles['tableOuter']}>
            <div className={styles.tableOuterContent}>
                <div className={styles.tableContentHeader}>
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan={2}></td>
                        </tr>
                        <tr>
                            <td style={{display: 'none'}}></td>
                        </tr>
                        <tr>
                            <td>公司名称</td>
                        </tr>
                        <tr>
                            <td>实际控制人名称</td>
                        </tr>
                        <tr>
                            <td valign="middle">实际控制人名称/公司</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={4}>2017</td>
                        </tr>
                        <tr>
                            <td>总资产(万元)</td>
                            <td>净资产(万元)</td>
                            <td>收入</td>
                            <td>净利润</td>
                        </tr>
                        <tr>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                        </tr>
                        <tr>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                        </tr>
                        <tr>
                            <td>
                                <span>总资产占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                            <td>
                                <span>净资产占比：</span><br/>
                                <span>25.54%</span>

                            </td>
                            <td>
                                <span>收入占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                            <td>
                                <span>净利润占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={4}>2017</td>
                        </tr>
                        <tr>
                            <td>总资产(万元)</td>
                            <td>净资产(万元)</td>
                            <td>收入</td>
                            <td>净利润</td>
                        </tr>
                        <tr>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                        </tr>
                        <tr>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                            <td>986,123,456,123</td>
                        </tr>
                        <tr>
                            <td>
                                <span>总资产占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                            <td>
                                <span>净资产占比：</span><br/>
                                <span>25.54%</span>

                            </td>
                            <td>
                                <span>收入占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                            <td>
                                <span>净利润占比：</span><br/>
                                <span>25.54%</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>);
    }
}

// render(<SituationOfOffice/>, document.getElementById(''));

