import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'

import _ from 'lodash'

let echarts = require('echarts');

// 指定图表的配置项和数据
import option from './IncidenceRelationChartConfig'
import a from './IncidenceRelationData'

import styles from './IncidenceRelationStyle.less'


import IncidenceRelationChartModule from './IncidenceRelationChart'


import {Modal, Button} from 'antd';


Array(25).fill(1).forEach(function (n, i) {
    a.sons[0].sons[0].sons.push({
        name: '蔡成功-' + i,
    })
});


function moreSons(sons, name) {
    let sonsReturn = [];
    if (sons.length > 10) {
        sonsReturn = sons.slice(0, 10);
        sonsReturn.push({name: `更多${name}（${sons.length - 10}）`, isMore: true});
        return sonsReturn;
    } else {
        return sons;
    }
}

let links = [];
let data = [];

let colorArr = {
    '本企业': '#0099C9',// 本企业
    '资金': '#3bb9b2',// 资金
    '人物': '#3ead65',// 人物
    '业务': '#e39132',// 业务
    '股权': '#5b7fdb',// 股权
};
let dataStyle = [80, 60, 50, 10];

let color = '';
let level = 0;

function deal(obj, level, fatherName) {
    color = colorArr[obj.name] ? colorArr[obj.name] : color;
    console.log(level);
    data.push({
        symbolSize: dataStyle[level],
        fatherName: fatherName,
        name: obj.name,
        type: obj.type,
        isMore: obj.isMore,
        itemStyle: {
            normal: {
                color: color,
            },
        },
        label: {// 未添加此属性值则默认为旁边显示
            normal: {
                position: level >= 3 ? 'right' : 'inside'
            },
        },
    });

    if (obj.sons) {
        obj.sons = moreSons(obj.sons, obj.name);
    }

    _.forEach(obj.sons, function (n, i) {
        links.push({
            source: obj.name,
            target: n.name,
            name: '',
            lineStyle: {
                normal: {
                    color: color,
                },
            },
        });
        deal(n, level + 1, obj.name)
    });
}

deal(a, level);
console.log(JSON.stringify({
    data: data,
    links: links
}));


let utilStyleShow = {};
let utilStyleHidden = {
    display: 'none'
};

let myChart;


// 股权结构
class IncidenceRelation extends Component {

    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = {
            /**
             * linkType: A 资金 对外担保
             * linkType: B 股
             */
            links: [{linkName: '机构名称XXX'}, {linkName: '机构名称XXX', linkType: 'A'}],
            isLager: false,
            isLagerWinVisible: false,
            isDetailShow: false
        };
    }

    componentDidMount() {

    }

    /**
     * 根据link的名字显示该层的结构
     * */
    showLinkWithName(linkName) {

    }

    maximizeHandler = () => {
        console.log('max');

        this.setState({
            isLager: true
        });
        myChart.resize({
            width: '800px',
            height: '800px'
        });
    }

    minimizeHandler = () => {
        console.log('min');
        this.setState({
            isLager: false
        });
        myChart.resize({
            width: '400px',
            height: '400px'
        });
    }

    showModal = () => {
        this.setState({
            isLagerWinVisible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            isLagerWinVisible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            isLagerWinVisible: false,
        });
    }
    detailWinOkHandler = () => {
        this.setState({
            isDetailShow: false,
        });
    }
    detailWinCancelHandler = () => {
        this.setState({
            isDetailShow: false,
        });
    }

    render() {
        return <div>
            <div className='moduleTitle'>
                关联关系图谱
                <span className={styles.optMaxMin}
                      onClick={this.state.isLager ? this.minimizeHandler : this.maximizeHandler}>
                    {this.state.isLager ? '-' : '+'}
                </span>
            </div>
            {/*
                    <span>
                        <span className='inner-default'>机构名称A</span>
                    </span>
                    <span>
                        <span className='inner-link'>-</span>
                        <span className='inner-default'>机构名称B</span>
                    </span>

                    <div id='IncidenceRelationChart' className={styles.IncidenceRelationChart} style={
                        this.state.isLager ?
                            {width: '800px', height: '800px'} :
                            {width: '500px', height: '500px'}
                    }></div>
            */}


            <IncidenceRelationChartModule canvasLabel={'lager'} chartData={option}></IncidenceRelationChartModule>
            <Button type="primary" onClick={this.showModal}>Open</Button>
            <Modal
                title="Basic Modal"
                visible={this.state.isLagerWinVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <IncidenceRelationChartModule canvasLabel={'big'}  chartData={option}></IncidenceRelationChartModule>
            </Modal>
            <Modal
                title="Basic Modal"
                visible={this.state.isDetailShow}
                onOk={this.detailWinOkHandler}
                onCancel={this.detailWinCancelHandler}
            >
            </Modal>
        </div>
    }
}

IncidenceRelation.propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.object,
    comName: PropTypes.string,
}
// export default connect(() => ({}))(IncidenceRelation)
export default IncidenceRelation

