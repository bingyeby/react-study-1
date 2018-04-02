/* 董事会结构 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'


// 指定图表的配置项和数据
import boardStructureChartConfig from './BoardStructureChartConfig';
import styles from './BoardStructureStyle.less'

class ComponentModule extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let boardStructureChart = echarts.init(document.getElementById('boardStructureChart'));
        // 使用刚指定的配置项和数据显示图表。
        boardStructureChart.setOption(boardStructureChartConfig);
    }

    render() {
        return <div>
            <div className='moduleTitle'>董事会结构</div>
            <div className={styles['seatMsg']}>
                <div className={styles['seatMsgCanvasOuter']}>
                    <div
                        id='boardStructureChart'
                        style={{
                            width: '170px',
                            height: '190px'
                        }}></div>
                </div>
                <div className={styles['seatMsgTableOuter']}>
                    <table className={styles['seatMsgTable']}>
                        <tbody>
                        <tr>
                            <td>
                                <span className={styles['seatMsgTableSign'] + ' ' + styles['typeA']}></span>
                            </td>
                            <td>
                                实际控制人派驻董事会
                                <br/>
                                席位：<span className={styles['seatValue']}>3</span>&nbsp;&nbsp; 占比：<span
                                className={styles['seatValue']}>23.56%</span>
                                <br/>
                                实际控制人派驻董事会且高管数量：<span className={styles['seatValue']}>3</span>
                            </td>
                            <td>
                                <span className={styles['seatMsgTableSign'] + ' ' + styles['typeB']}></span>
                            </td>
                            <td>
                                独立董事<br/>
                                席位：<span className={styles['seatValue']}>3</span>&nbsp;&nbsp; 占比：<span
                                className={styles['seatValue']}>23.96%</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles['seatMsgTableSign'] + ' ' + styles['typeC']}></span>
                            </td>
                            <td>
                                一致行动人派驻董事会<br/>
                                席位：<span className={styles['seatValue']}>3
                                </span>&nbsp;&nbsp; 占比：<span className={styles['seatValue']}>23.56%</span>
                            </td>
                            <td>
                                <span className={styles['seatMsgTableSign'] + ' ' + styles['typeC']}></span>
                            </td>
                            <td>
                                其它<br/>
                                席位：<span className={styles['seatValue']}>3</span>&nbsp;&nbsp;
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    }
}


ComponentModule.propTypes = {};
// export default connect(() => ({}))(ComponentModule)
export default ComponentModule
