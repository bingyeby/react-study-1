/* 股东比例 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'

import styles from './Scale.less'
import ScaleWithShareHolderChartConfig from './ScaleWithShareHolderChartConfig';

class ScaleWithShareHolder extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ScaleWithShareHolderChart = echarts.init(document.getElementById('ScaleWithShareHolderChartId'));
        ScaleWithShareHolderChart.setOption(ScaleWithShareHolderChartConfig);
    }

    render() {
        return <div className={styles.outer}>
            <div className='moduleTitle'>股东占比</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ScaleWithShareHolderChartId'
                    style={{
                        // border: '1px solid red',
                        width: '100%',
                        height: '194px'
                    }}></div>
            </div>
        </div>
    }
}

ScaleWithShareHolder.propTypes = {};
// export default connect(() => ({}))(ScaleWithShareHolder)
export default ScaleWithShareHolder

