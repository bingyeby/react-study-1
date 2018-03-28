import React, { Component } from 'react';
import { render } from 'react-dom';

let echarts = require('echarts');

// 指定图表的配置项和数据
import option2 from './config2';
import Test7Style from './test7style.less'

export default class Counter extends Component {

    constructor(props) { // 入参
        super(props); // 组件基类
    }

    componentDidMount() {
        let myChart2 = echarts.init(document.getElementById('d2'));
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
    }

    render() {
        return <div className={Test7Style["seatMsg"]}>
            <div className={Test7Style["seatMsgCanvasOuter"]}>
                <div
                    id='d2'
                    style={{
                        width: '170px',
                        height: '190px',
                    }}></div>
            </div>
            <div className={Test7Style["seatMsgTableOuter"]}>
                <table className={Test7Style["seatMsgTable"]}>
                    <tr>
                        <td>
                            <span className={Test7Style['seatMsgTableSign'] + ' ' + Test7Style['typeA']}></span>
                        </td>
                        <td>
                            实际控制人 <br />
                            席位：<span className={Test7Style["seatValue"]}>3</span>&nbsp;&nbsp;
                            占比：<span className={Test7Style["seatValue"]}>23.56%</span> <br />
                            实际控制人派驻董事会且高管数量：<span className={Test7Style["seatValue"]}>3</span>
                        </td>
                        <td>
                            <span className={Test7Style['seatMsgTableSign'] + ' ' + Test7Style['typeB']}></span>
                        </td>
                        <td>
                            独立董事<br />
                            席位：<span className={Test7Style["seatValue"]}>3</span>&nbsp;&nbsp;
                            占比：<span className={Test7Style["seatValue"]}>23.96%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={Test7Style['seatMsgTableSign'] + ' ' + Test7Style['typeC']}></span>
                        </td>
                        <td>
                            一致行动人派驻董事会<br />
                            席位：<span className={Test7Style["seatValue"]}>3 </span>&nbsp;&nbsp;
                            占比：<span className={Test7Style["seatValue"]}>23.56%</span>
                        </td>
                        <td>
                            <span className={Test7Style['seatMsgTableSign'] + " " + Test7Style['typeC']}></span>
                        </td>
                        <td>
                            其它<br />
                            席位：<span className={Test7Style["seatValue"]}>3</span>&nbsp;&nbsp;
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    }
}
// render(<Counter initialCount='1'/>