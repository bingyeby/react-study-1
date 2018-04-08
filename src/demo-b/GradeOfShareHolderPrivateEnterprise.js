/* 任职情况 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'

import styles from './GradeOfShareHolderPrivateEnterpriseStyle.less'

class ComponentModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className='moduleTitle'>实际控制人相关信息
                <span className={styles.more}>更多></span>
            </div>
            <div className={styles.tableOuter}>
                <table>
                    <tbody>
                    <tr>
                        <td>【个人简历】</td>
                        <td>
                            <div className={styles.msgOuter}>
                                <span className={styles.msg}>
                                    xxx有限公司成立于2010年，历经多年发展，已成为集资本运作、评估拿地、规划设计、开发建设、策划营销、家装定制、物业管理和社区服务为一体的多元化开发企业。
                                </span>
                                <span className={styles.date}>
                                    2018/02/16
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>【新闻】</td>
                        <td>
                            <div className={styles.msgOuter}>
                                <span className={styles.msg}>
                                    xxx有限公司成立于2010年，历经多年发展，已成为集资本运作、评估拿地、规划设计、开发建设、策划营销、家装定制、物业管理和社区服务为一体的多元化开发企业。
                                </span>
                                <span className={styles.date}>
                                    2018/02/16
                                </span>
                            </div>
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
