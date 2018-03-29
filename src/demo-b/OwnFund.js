/* 控股股东评级 */
import React, {Component} from 'react';
import {render} from 'react-dom';

let echarts = require('echarts');


import styles from './OwnFundStyle.less'
import OwnFundChartConfig from './OwnFundChartConfig';

export default class OwnFund extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ownFundChart = echarts.init(document.getElementById('ownFundChartId'));
        ownFundChart.setOption(OwnFundChartConfig);
    }

    render() {
        return <div className={styles['seatMsg']}>
            <div className={styles['seatMsgCanvasOuter']}>
                <div
                    id='ownFundChartId'
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

// render(<OwnFund/>, document.getElementById(''));

