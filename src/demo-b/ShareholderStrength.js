/* 股东实力 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'
import _ from 'lodash'

import styles from './ShareholderStrengthStyle.less'

class ShareholderStrength extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                [], [], []
            ],
            labelDataArr: [
                {
                    value: '其他应收款(关联方)',
                    isActive: true
                },
                {
                    value: '其他应付款(关联方)',
                    isActive: false

                },
                {
                    value: '长期应收款(关联方)',
                    isActive: false
                }
            ]
        }
    }

    activeHandler = (clickObj) => {
        let index = 0;
        _.each(this.state.labelDataArr, function (n, i) {
            n.isActive = false;
            if (clickObj.value === n.value) {
                n.isActive = true;
                index = i;
            }
        });
        this.setState({
            labelDataArr: this.state.labelDataArr
        })
    };

    render() {
        return (<div>

            <div className={styles.labelOuter}>
                {
                    this.state.labelDataArr.map((n, i) => {
                        return (<span key={`labelDataArr${i}`}
                                      className={n.isActive ? styles.active : styles.normal}
                                      onClick={this.activeHandler.bind(this, n)}>{n.value}</span>)
                    })
                }
            </div>
            <div>

            </div>


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

ShareholderStrength.propTypes = {};
// export default connect(() => ({}))(ShareholderStrength)
export default ShareholderStrength

