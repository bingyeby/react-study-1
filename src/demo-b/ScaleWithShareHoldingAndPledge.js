/* 质押比例 */
import React, {Component} from 'react';
import {render} from 'react-dom';

let echarts = require('echarts');


import styles from './Share.less'
import ScaleWithPledgeChartConfig from './ScaleChartConfig';

export default class ScaleWithPledge extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ScaleWithPledgeChart = echarts.init(document.getElementById('ScaleWithShareHolding'));
        ScaleWithPledgeChart.setOption(ScaleWithPledgeChartConfig);
    }

    render() {
        return <div className={styles.outer}>
            <div className={styles.title}>持股比例</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ScaleWithShareHolding'
                    style={{
                        border: '1px solid red',
                        width: '738px',
                        height: '194px'
                    }}></div>
            </div>
            <div className={styles.markOuter}>
                <span className={styles.typeA}></span>
                <span>控制人持股比例</span>
                <span className={styles.typeB}></span>
                <span>实控人(含一致行动人)持股比例</span>
            </div>
            <div className={styles.title}>质量比例</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ScaleWithPledgeChartId'
                    style={{
                        border: '1px solid red',
                        width: '738px',
                        height: '194px'
                    }}></div>
            </div>
            <div className={styles.markOuter}>
                <span className={styles.typeA}></span>
                <span>控制人股票质押比例</span>
                <span className={styles.typeB}></span>
                <span>实控人(含一致行动人)股票质押比例</span>
            </div>
        </div>
    }
}

// render(<ScaleWithPledge/>, document.getElementById(''));

