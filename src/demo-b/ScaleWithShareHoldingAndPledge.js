/* 持股 质押比例 */
import React, {Component} from 'react';
import {render} from 'react-dom';

let echarts = require('echarts');

let _ = require('lodash');


import styles from './Scale.less'
import ScaleWithPledgeChartConfig from './ScaleWithShareHoldingAndPledgeChartConfig';

export default class ScaleWithPledge extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let ScaleWithShareHolding = echarts.init(document.getElementById('ScaleWithShareHolding'));
        ScaleWithShareHolding.setOption(_.merge({}, ScaleWithPledgeChartConfig, {
            series: [
                {data: [2, 30, 40, 6, 7]},
                {data: [2, 3, 80, 6, 7]},
            ]
        }));

        let ScaleWithPledgeChartId = echarts.init(document.getElementById('ScaleWithPledgeChartId'));
        ScaleWithPledgeChartId.setOption(_.merge({}, ScaleWithPledgeChartConfig, {
            series: [
                {data: [20, 30, 40, 6, 7]},
                {data: [2, 3, 4, 60, 7]},
            ]
        }));
    }

    render() {
        return <div className={styles.outer}>
            <div className='moduleTitle'>实际控制人持股及质押比例</div>
            <div className={styles.miniTitle}>持股比例</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ScaleWithShareHolding'
                    style={{
                        border: '1px solid red',
                        width: '738px',
                        height: '194px'
                    }}></div>
            </div>
            {/*<div className={styles.markOuter}>*/}
            {/*<span className={styles.typeA}></span>*/}
            {/*<span>控制人持股比例</span>*/}
            {/*<span className={styles.typeB}></span>*/}
            {/*<span>实控人(含一致行动人)持股比例</span>*/}
            {/*</div>*/}
            <div className={styles.miniTitle}>质押比例</div>
            <div className={styles.canvasContainer}>
                <div
                    id='ScaleWithPledgeChartId'
                    style={{
                        border: '1px solid red',
                        width: '738px',
                        height: '194px'
                    }}></div>
            </div>
            {/*<div className={styles.markOuter}>*/}
            {/*<span className={styles.typeA}></span>*/}
            {/*<span>控制人股票质押比例</span>*/}
            {/*<span className={styles.typeB}></span>*/}
            {/*<span>实控人(含一致行动人)股票质押比例</span>*/}
            {/*</div>*/}
        </div>
    }
}

// render(<ScaleWithPledge/>, document.getElementById(''));

