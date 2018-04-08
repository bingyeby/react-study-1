/* 股东实力 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'

import styles from './ShareholderStrengthPrivateEnterpriseStyle.less'

class ShareholderStrength extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className='moduleTitle'>股东实力
                &nbsp;<span className={styles.miniTitle}>(实际控制人控制的除本公司及其子公司外的其他权益投资)</span>
            </div>
            <div className={styles.tableOuter}>
                <table>
                    <tbody>
                    <tr>
                        <th>公司全称</th>
                        <th>注册资本（万元）</th>
                        <th>持股比例</th>
                    </tr>
                    <tr>
                        <td>XXX集团（股份）有限公司</td>
                        <td>
                            516,234,345,456.123
                            <span className={styles.cny}>&nbsp;CNY</span>
                        </td>
                        <td>23.56%</td>
                    </tr>
                    <tr>
                        <td>XXX集团（股份）有限公司</td>
                        <td>
                            516,234,345,456.123
                            <span className={styles.cny}>&nbsp;CNY</span>
                        </td>
                        <td>23.56%</td>
                    </tr>
                    <tr>
                        <td>XXX集团（股份）有限公司</td>
                        <td>
                            516,234,345,456.123
                            <span className={styles.cny}>&nbsp;CNY</span>
                        </td>
                        <td>23.56%</td>
                    </tr>
                    <tr>
                        <td>XXX集团（股份）有限公司</td>
                        <td>
                            516,234,345,456.123
                            <span className={styles.cny}>&nbsp;CNY</span>
                        </td>
                        <td>23.56%</td>
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

