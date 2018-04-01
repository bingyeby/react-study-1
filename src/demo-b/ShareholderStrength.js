/* 股东实力 */
import React, {Component} from 'react';
import {render} from 'react-dom';

import styles from './ShareholderStrengthStyle.less'

export default class SituationOfOffice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className='moduleTitle'>股东实力</div>
            <div className={styles.tableOuter}>
                <table>
                    <tbody>
                    <tr>
                        <th rowSpan={2}></th>
                        <th colSpan={4}>2017</th>
                        <th colSpan={4}>2017</th>
                    </tr>
                    <tr>
                        <th style={{display: 'none'}}></th>

                        <th>总资产(万元)</th>
                        <th>净资产(万元)</th>
                        <th>收入</th>
                        <th>净利润</th>

                        <th>总资产(万元)</th>
                        <th>净资产(万元)</th>
                        <th>收入</th>
                        <th>净利润</th>
                    </tr>
                    <tr>
                        <th>公司名称</th>

                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>

                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                    </tr>
                    <tr>
                        <th>实际控制人名称</th>

                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>

                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                        <td>986,123,456,123</td>
                    </tr>
                    <tr>
                        <th>实际控制人名称/公司</th>
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

        </div>);
    }
}


