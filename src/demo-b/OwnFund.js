/* 控股股东评级 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'


import styles from './OwnFundStyle.less'
import OwnFundChartConfig from './OwnFundChartConfig';

class OwnFund extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ownFundChart = echarts.init(document.getElementById('ownFundChartId'));
        ownFundChart.setOption(OwnFundChartConfig);
    }

    render() {
        return <div className={styles.outer}>
            <div className='moduleTitle'>股东占款</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ownFundChartId'
                    style={{
                        width: '100%',// 601px
                        height: '194px'
                    }}></div>
            </div>
        </div>
    }
}
OwnFund.propTypes = {};
// export default connect(() => ({}))(OwnFund)
export default OwnFund



