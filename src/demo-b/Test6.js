import React, { Component } from 'react';
import { render } from 'react-dom';

let echarts = require('echarts');

// 指定图表的配置项和数据
import option from './config';


import Test6Style from './test6style.less'


let utilStyleShow = {};
let utilStyleHidden = {
    display: 'none'
};

let myChart;
export default class Counter extends Component {
    static propTypes = { // 限制类型
    };
    static defaultProps = { // 默认值
        initialCount: 1
    };

    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = {
            /**
             * linkType: A 资金 对外担保
             * linkType: B 股
             */
            links: [{ linkName: '机构名称XXX' }, { linkName: '机构名称XXX', linkType: 'A' }],
            isLager: false,
        }
        this.lager = this.lager.bind(this);

    }

    componentDidMount() {
        myChart = echarts.init(document.getElementById('d1'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (e) {
            console.log(e);
            console.log(myChart.setOption);
            option.series[0].data.pop();
            myChart.setOption(option);
            console.log(this.state.students);
            this.state.links.push({ linkName: new Date().getTime(), linkType: 'B' });
            this.setState({ 'students': this.state.students });
        }.bind(this));

    }

    showSomeThing(linkName) {
        console.log('linkName', linkName);
    }

    /**
     * 根据link的名字显示该层的结构
     * */
    showLinkWithName(linkName) {

    }

    lager() {
        console.log("最大化");
        this.setState({
            isLager: true
        });
        myChart.resize({
            width: '800px',
            height: '800px'
        });

    }

    render() {
        return <div>
            <div className={Test6Style.label}>
                <span className={Test6Style['label-title']}>关联关系图谱</span>
                <span className={Test6Style['opt-lager']} onClick={this.lager}>{this.state.isLager ? '-' : '+'}</span>
            </div>
            <div className={Test6Style['link-outer']}>
                {/* 指示关系 */}
                {
                    this.state.links.map(function (link, i) {
                        return <span key={i}>
                            <span className={Test6Style['inner-link']} style={link.linkType ? utilStyleShow : utilStyleHidden}>-></span>
                            <span className={Test6Style['inner-linkName']}
                                onClick={this.showSomeThing.bind(this, link.linkName)}>{link.linkName}</span>
                        </span>
                    }.bind(this))
                }

                {/*<span>
                    <span className='inner-default'>机构名称A</span>
                </span>
                <span>
                    <span className='inner-link'>-</span>
                    <span className='inner-default'>机构名称B</span>
                </span>*/}

                <div id='d1' style={
                    this.state.isLager ?
                        { width: '800px', height: '800px' } :
                        { width: '500px', height: '500px' }
                }></div>
            </div>
        </div>
    }
}

// render(<Counter initialCount='1'/>, document.getElementById('root'));


