/* 任职情况 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'

import styles from './GradeOfShareHolderStyle.less'

class ComponentModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className='moduleTitle'>股东控股评级</div>
            <div className={styles.tableOuter}>
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
                        <th style={{display: 'none'}}></th>
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
                        <th style={{display: 'none'}}></th>
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
            </div>
        </div>);
    }
}

ComponentModule.propTypes = {};
// export default connect(() => ({}))(ComponentModule)
export default ComponentModule
