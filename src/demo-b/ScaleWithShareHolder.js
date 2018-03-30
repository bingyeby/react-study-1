/* 股东比例 */
import React, {Component} from 'react';
import {render} from 'react-dom';

let echarts = require('echarts');


import styles from './Share.less'
import ScaleWithShareHolderChartConfig from './ScaleChartConfig';

export default class ScaleWithShareHolder extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ScaleWithShareHolderChart = echarts.init(document.getElementById('ScaleWithShareHolderChartId'));
        ScaleWithShareHolderChart.setOption(ScaleWithShareHolderChartConfig);
    }

    render() {
        return <div className={styles['seatMsg']}>
            <div className={styles['seatMsgCanvasOuter']}>
                <div
                    id='ScaleWithShareHolderChartId'
                    style={{
                        width: '500px',
                        height: '180px'
                    }}></div>
            </div>
            <div className={styles['']}>

            </div>
        </div>
    }
}

// render(<ScaleWithShareHolder/>, document.getElementById(''));

