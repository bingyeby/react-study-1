import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'
import _ from 'lodash'
import echarts from 'echarts'
import styles from './IncidenceRelationStyle.less'
import IncidenceRelationChartModule from './IncidenceRelationChart'
import {Modal, Button} from 'antd';

// 指定图表的配置项和数据
import IncidenceRelationChartConfig from './IncidenceRelationChartConfig'
import IncidenceRelationData from './IncidenceRelationData'// 基础数据
Array(25).fill(1).forEach(function (n, i) {
    IncidenceRelationData.sons[0].sons[0].sons.push({
        name: '蔡成功-' + i,
    })
});


let links = [];
let data = [];
let colorArr = {
    '本企业': '#0099C9',// 本企业
    '资金': '#3bb9b2',// 资金
    '人物': '#3ead65',// 人物
    '业务': '#e39132',// 业务
    '股权': '#5b7fdb',// 股权
};
let dataStyle = [80, 60, 50, 20];
let color = '';// 颜色
let level = 0;//等级
/*
* 显示更多
* */
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

/*
* 处理数据,将后台数据处理成可以展示的数据
* */
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

deal(_.merge({}, IncidenceRelationData), level);
// console.log(JSON.stringify({
//     data: data,
//     links: links
// }));

let chartData = _.merge({}, IncidenceRelationChartConfig, {
    series: [{
        data: data,
        links: links
    }]
});


// 股权结构
class IncidenceRelation extends Component {

    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = {
            /**
             * linkType: A 资金 对外担保
             * linkType: B 股
             */
            topLinks: [{linkName: '机构名称XXX'}],
            isLagerShow: false,
            isDetailShow: false,
            detail: [],
            chartData: chartData
        };
    }

    componentDidMount() {

    }

    getDetail(fatherName) {

        console.log(fatherName);

        let detail = [];

        function getDetailWithFatherName(obj) {
            if (obj.name === fatherName) {
                detail = obj.sons;
            }
            _.forEach(obj.sons, function (n, i) {
                getDetailWithFatherName(n);
            });
        }

        getDetailWithFatherName(IncidenceRelationData);
        console.log(detail);
        return detail;
    }

    /*显示更多信息*/
    showDetailWin = (fatherName) => {
        this.setState({
            isDetailShow: true,
            detail: this.getDetail(fatherName)
        });
    };

    detailWinOkHandler = () => {
        this.setState({
            isDetailShow: false,
        });
    };
    detailWinCancelHandler = () => {
        this.setState({
            isDetailShow: false,
        });
    };
    /*显示大图*/
    showLagerWin = () => {
        this.setState({
            isLagerShow: true,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            isLagerShow: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            isLagerShow: false,
        });
    };

    /*改变顶部链接状态值*/
    topLinksChange = (nodeInfo) => {
        console.log('改变顶部链接状态值');
        let father;

        function getNodeInfoMoreByNodeName(obj, nodeName, fatherName) {
            if (obj.name === nodeName) {
                father = fatherName
            }
            _.each(obj.sons, function (n) {
                getNodeInfoMoreByNodeName(n, nodeName, obj.name)
            })
        }

        getNodeInfoMoreByNodeName(IncidenceRelationData, nodeInfo.name);
        let fatherA = father;
        getNodeInfoMoreByNodeName(IncidenceRelationData, fatherA);
        let fatherB = father;
        this.state.topLinks.push({
            linkName: fatherA + '|' + fatherB + ':' + nodeInfo.name,
            linkType: fatherA + '|' + fatherB
        });
        this.setState({
            topLinks: this.state.topLinks
        });
    };

    /**/
    chartDataChange = (nodeInfo) => {
        console.log("123567854323456786543");
        this.state.chartData.series[0].data.pop();
        this.setState({
            chartData: this.state.chartData
        })
    };

    /*从详情中点击节点，并展示节点信息:关闭弹框*/
    showNodeMsg = (nodeInfo) => {
        console.log(nodeInfo);
        this.setState({
            isDetailShow: false
        });
        this.showNodeMsgBasic(nodeInfo);
    };

    showNodeMsgBasic = (nodeInfo) => {
        this.topLinksChange(nodeInfo);

    };


    render() {
        return <div>
            <div className='moduleTitle'>
                关联关系图谱
                <span className={styles.optMaxMin} onClick={this.showLagerWin}>+</span>
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


            <IncidenceRelationChartModule canvasLabel={'lager'} isLager={false}
                                          topLinks={this.state.topLinks}
                                          topLinksChange={nodeInfo => this.topLinksChange(nodeInfo)}
                                          chartData={this.state.chartData}
                                          chartDataChange={nodeInfo => this.chartDataChange(nodeInfo)}
                                          showDetailWin={msg => this.showDetailWin(msg)}>

            </IncidenceRelationChartModule>
            <Modal
                className={styles.modalStyle}
                title="lager"
                visible={this.state.isLagerShow}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <IncidenceRelationChartModule canvasLabel={'big'} isLager={true}
                                              topLinks={this.state.topLinks}
                                              topLinksChange={nodeInfo => this.topLinksChange(nodeInfo)}
                                              chartData={this.state.chartData}
                                              chartDataChange={nodeInfo => this.chartDataChange(nodeInfo)}
                                              showDetailWin={msg => this.showDetailWin(msg)}>

                </IncidenceRelationChartModule>
            </Modal>
            <Modal
                className={styles.modalStyle}
                title="detail"
                visible={this.state.isDetailShow}
                onOk={this.detailWinOkHandler}
                onCancel={this.detailWinCancelHandler}
            >
                <div style={
                    {color: 'white'}
                }>
                    <span>
                        {this.state.detail.map(function (n, i) {
                            return (
                                <div key={i} onClick={this.showNodeMsg.bind(this, n)}>
                                    {n.name}
                                </div>
                            )
                        }.bind(this))}
                    </span>

                </div>
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

