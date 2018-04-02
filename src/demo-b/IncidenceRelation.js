import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'

let echarts = require('echarts');

// 指定图表的配置项和数据
import option from './IncidenceRelationChartConfig'
import styles from './IncidenceRelationStyle.less'


import IncidenceRelationChartModule from './IncidenceRelationChart'

import {Modal, Button} from 'antd';


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

    showLinkMsg(linkName) {
        console.log('linkName', linkName);
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
            <div className={styles['link-outer']}>
                {/* 指示关系 */}
                {
                    this.state.links.map(function (link, i) {
                        return <span key={i}>
                            <span className={styles['inner-link']}
                                  style={link.linkType ? utilStyleShow : utilStyleHidden}>-></span>
                            <span className={styles['inner-linkName']}
                                  onClick={this.showLinkMsg.bind(this, link.linkName)}>{link.linkName}</span>
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

                {/*<div id='IncidenceRelationChart' className={styles.IncidenceRelationChart} style={*/}
                {/*this.state.isLager ?*/}
                {/*{width: '800px', height: '800px'} :*/}
                {/*{width: '500px', height: '500px'}*/}
                {/*}></div>*/}

                <IncidenceRelationChartModule canvasLabel={'lager'}></IncidenceRelationChartModule>

                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.isLagerWinVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <IncidenceRelationChartModule canvasLabel={'big'}></IncidenceRelationChartModule>
                </Modal>
                <Modal
                    title="Basic Modal"
                    visible={this.state.isDetailShow}
                    onOk={this.detailWinOkHandler}
                    onCancel={this.detailWinCancelHandler}
                >
                </Modal>
            </div>
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

