/* 股东比例 */
import React, {Component} from 'react';
import {render} from 'react-dom';

let echarts = require('echarts');


import styles from './Scale.less'
import ScaleWithShareHolderChartConfig from './ScaleWithShareHolderChartConfig';

export default class ScaleWithShareHolder extends Component {

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
                        border: '1px solid red',
                        width: '738px',
                        height: '194px'
                    }}></div>
            </div>
        </div>
    }
}

// render(<ScaleWithShareHolder/>, document.getElementById(''));

