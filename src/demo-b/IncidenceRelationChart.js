import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'

let echarts = require('echarts')

// 指定图表的配置项和数据
import styles from './IncidenceRelationStyle.less'


// import { config } from '../../utils'


let utilStyleShow = {};
let utilStyleHidden = {
    display: 'none'
};

let myChart;


// 股权结构
class IncidenceRelationChart extends Component {

    constructor(props) {// 入参
        super(props);// 组件基类
        this.state = {
            /**
             * linkType: A 资金 对外担保
             * linkType: B 股
             */
            topLinks: [{linkName: '机构名称XXX'}],
            isLager: false,
        };
    }

    componentDidMount() {
        myChart = echarts.init(document.getElementById(`IncidenceRelationChart${this.props.canvasLabel}`));
        console.log(this.props.chartData);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.props.chartData);
        myChart.on('click', function (e) {
            console.log(e);

            if (e.data.fatherName === '股东担保') {
                console.log('点击的是股东担保下面的某个子节点');
                if (e.data.isMore) {
                    console.log('点击的是‘显示更多’节点，弹框显示更多节点信息');
                } else {
                    console.log('根据点击的节点信息');
                    console.log('显示某个公司点');
                    this.state.topLinks.push({linkName: e.name, linkType: 'B'});
                    this.props.chartData.series[0].data.pop();
                    myChart.setOption(this.props.chartData);
                }
            } else if (e.data.fatherName === '对外担保') {
                console.log('点击的是对外担保下面的某个子节点');


            }


        }.bind(this));

    }


    /**
     * 根据link的名字显示该层的结构
     * */
    showLinkWithName(linkName) {

    }


    showLinkMsg(linkName) {
        console.log('linkName', linkName);
    }


    render() {
        return <div>
            <div className={styles.linkOuter}>
                {/* 指示关系 */}
                {
                    this.state.topLinks.map(function (link, i) {
                        return <span key={i}>
                            <span className={styles['inner-link']}
                                  style={link.linkType ? utilStyleShow : utilStyleHidden}>-></span>
                            <span className={styles['inner-linkName']}
                                  onClick={this.showLinkMsg.bind(this, link.linkName)}>{link.linkName}</span>
                        </span>
                    }.bind(this))
                }
            </div>
            <div id={`IncidenceRelationChart${this.props.canvasLabel}`} className={styles.IncidenceRelationChart}
                 style={
                     this.state.isLager ?
                         {width: '800px', height: '800px'} :
                         {width: '500px', height: '500px'}
                 }></div>
        </div>
    }
}

IncidenceRelationChart.propTypes = {};
// export default connect(() => ({}))(IncidenceRelation)
export default IncidenceRelationChart

