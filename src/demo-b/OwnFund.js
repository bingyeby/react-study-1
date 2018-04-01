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
        return <div className={styles.outer}>
            <div className='moduleTitle'>股东占股</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ownFundChartId'
                    style={{
                        width: '601px',
                        height: '194px'
                    }}></div>
            </div>
        </div>
    }
}

// render(<OwnFund/>, document.getElementById(''));

