import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'dva'
import echarts from 'echarts'
import PropTypes from 'prop-types'

// 指定图表的配置项和数据
import option from './IncidenceRelationChartConfig';
import styles from './IncidenceRelationStyle.less'


let utilStyleShow = {};
let utilStyleHidden = {
    display: 'none'
};

let myChart;
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
        };
    }

    componentDidMount() {
        myChart = echarts.init(document.getElementById('IncidenceRelationChart'));
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

                <div id='IncidenceRelationChart' className={styles.IncidenceRelationChart} style={
                    this.state.isLager ?
                        {width: '800px', height: '800px'} :
                        {width: '500px', height: '500px'}
                }></div>
            </div>
        </div>
    }
}

IncidenceRelation.propTypes = {};
// export default connect(() => ({}))(IncidenceRelation)
export default IncidenceRelation

