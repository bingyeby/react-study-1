import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'dva'

let echarts = require('echarts')

// 指定图表的配置项和数据
import option from './IncidenceRelationChartConfig'
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
            links: [{linkName: '机构名称XXX'}, {linkName: '机构名称XXX', linkType: 'A'}],
            isLager: false,
        };
    }

    componentDidMount() {
        myChart = echarts.init(document.getElementById(`IncidenceRelationChart${this.props.canvasLabel}`));
        console.log(this.props);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function (e) {
            console.log(e);
            console.log(myChart.setOption);
            option.series[0].data.pop();
            myChart.setOption(option);
            console.log(this.state.students);
            this.state.links.push({linkName: new Date().getTime(), linkType: 'B'});
            this.setState({'students': this.state.students});
        }.bind(this));

    }


    /**
     * 根据link的名字显示该层的结构
     * */
    showLinkWithName(linkName) {

    }


    render() {
        return <div>
            <div id={`IncidenceRelationChart${this.props.canvasLabel}`} className={styles.IncidenceRelationChart} style={
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

