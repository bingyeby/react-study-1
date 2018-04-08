import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'

let echarts = require('echarts');

import {Tooltip} from 'antd'

// 指定图表的配置项和数据
import styles from './IncidenceRelationStyle.less'


// import { config } from '../../utils'


let utilStyleShow = {};
let utilStyleHidden = {
    display: 'none'
};


// 股权结构
class IncidenceRelationChart extends Component {

    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = {
            topLinks: this.props.topLinks,
            isLager: this.props.isLager,
        };
        this.myChart = {};
    }

    componentDidMount() {
        this.myChart = echarts.init(document.getElementById(`IncidenceRelationChart${this.props.canvasLabel}`));
        console.log(this.props.chartData);
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.props.chartData);
        this.myChart.on('click', function (e) {
            console.log(e);
            // if (e.data.fatherName === '股东担保') {
            //     console.log('点击的是股东担保下面的某个子节点');
            // } else if (e.data.fatherName === '对外担保') {
            //     console.log('点击的是对外担保下面的某个子节点');
            // }
            if (e.data.level === 3) {
                if (e.data.isMore) {
                    console.log('\t点击的是‘显示更多’节点，弹框显示更多节点信息', 'e.data.fatherName:', e.data.fatherName);
                    this.props.showDetailWin(e.data.fatherName);
                } else {
                    console.log('\t点击的是某个公司点', e.data);
                    this.props.topLinksAdd(e.data);
                    this.props.chartDataChange(e.data);
                }
            }
        }.bind(this));
    }

    componentDidUpdate() {
        this.myChart.setOption(this.props.chartData);
    }

    render() {
        console.log('IncidenceRelationChart.js render');

        return <div>
            <div className={styles.linkOuter}>
                {/* 指示关系 */}
                {
                    this.props.topLinks.map(function (link, i) {
                        return <span key={i}>
                            <Tooltip title={link.fatherA}>
                                <span className={styles.fatherBOuter}
                                      style={link.fatherA ? utilStyleShow : utilStyleHidden}>
                                    <span className={styles.fatherB}>
                                        {link.fatherB}
                                    </span>
                                </span>
                            </Tooltip>
                            <span className={styles['inner-linkName']}
                                  onClick={this.props.updateInfoWithLinkClick.bind(this, link)}>{link.nodeName}</span>
                        </span>
                    }.bind(this))
                }
            </div>
            <div id={`IncidenceRelationChart${this.props.canvasLabel}`} className={styles.IncidenceRelationChart}
                 style={
                     this.state.isLager ?
                         {width: '100%', height: '510px'} :
                         {width: '100%', height: '500PX'}
                 }></div>
        </div>
    }
}

IncidenceRelationChart.propTypes = {};
// export default connect(() => ({}))(IncidenceRelation)
export default IncidenceRelationChart

