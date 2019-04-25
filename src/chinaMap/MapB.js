import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'
import moduleChartConfig from './MapBChartConfig'
import _ from 'lodash'

import styles from './map.less'

import {cityList, getInfoWithCodeName} from './loadChinaMap'


/*
* 自己引用json:
*   注册map:  echarts.registerMap('china2', goeJson)
*   使用map:  geo: { map: 'china2'}
* */
import goeJson from '../chinaMapD3/china.geojson'

echarts.registerMap('china2', goeJson)


import geoCoordMap from './cityGeo'

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    // 图表的配置
    this.config = {}
    // 鼠标点击控制
    this.isAreaClick = false
    this.isMouseMove = false
    // 标识当前层级
    this.mapLevel = ['china']
  }

  componentDidMount() {
    this.moduleChart = echarts.init(this.chartDom)
    window.addEventListener('resize', this.autoResizeEcharts, false)
    this.showChartData(this.props)

    this.moduleChart.on('geoselectchanged', function (params) {
      console.log(`geoselectchanged `, params)
    })
    this.moduleChart.on('geoselected', function (params) {
      console.log(`geoselected `, params)
    })
    this.moduleChart.on('datazoom', (params) => {
      console.log(`datazoom`, params)
    })

    this.moduleChart.on('click', (params) => {

      this.isAreaClick = true
      let areaName = params.name.replace('市', '')

      let map = echarts.getMap(areaName)

      console.log(` areaName map`, areaName, map, this.mapLevel)

      if (_.isNil(map) || (_.size(this.mapLevel) > 2)) {
        return
      }

      let option = this.moduleChart.getOption()
      this.config.geo.map = areaName
      this.moduleChart.setOption(this.config, true)
      this.mapLevel.push(areaName)
    })
  }

  componentDidUpdate() {
    this.showChartData()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.autoResizeEcharts, false)
  }

  onMouseUpHandler = () => {
    setTimeout((n) => {
      console.log(`chartDomClick 11`, this.isAreaClick, this.isMouseMove)
      if (this.isAreaClick || this.isMouseMove) {// 点击区域是地图,不做处理
        console.log(`不处理`,)
      } else {// 点击空白区域 返回上一层
        console.log(`chartDomClick 返回上一层`,)
        if (_.size(this.mapLevel) > 1) {
          this.mapLevel.pop()
          this.config.geo.map = _.last(this.mapLevel)
          this.moduleChart.setOption(this.config, true)
        }
      }
      this.isAreaClick = false
      this.isMouseMove = false
    }, 0)
  }

  /*
  * 展示数据
  * */
  showChartData = (props) => {

    let serverData = [
      {name: "海门", value: 9},
      {name: "鄂尔多斯", value: 12},
      {name: "招远", value: 12},
      {name: "大庆", value: 279}
    ]
    let seriesData = serverData.map((n) => {
      return [...geoCoordMap[n.name], n.value]
    })

    this.config = _.merge({}, moduleChartConfig, {
      series: [
        {
          data: seriesData,
        }
      ]
    })
    this.moduleChart.setOption(this.config, true)
  }

  autoResizeEcharts = () => {
    this.moduleChart.resize()
  }

  render() {
    return <div className={styles.chinaChartWrap}>
      <div ref={i => {
        this.chartDom = i
      }} style={{width: 1000, height: 500}}
        onMouseDown={(n) => {
          this.isMouseMove = false
        }}
        onMouseUp={this.onMouseUpHandler}
        onMouseMove={(n) => {
          this.isMouseMove = true
        }}
      ></div>
      <div className={styles.btnList}>
        <div onClick={(n) => {
          _.merge(this.config, {
            geo: {
              zoom: this.config.geo.zoom * 1.2,
            },
          })
          this.moduleChart.setOption(this.config, true)
        }}>+
        </div>
        <div onClick={(n) => {
          _.merge(this.config, {
            geo: {
              zoom: this.config.geo.zoom * 0.9,
            },
          })
          this.moduleChart.setOption(this.config, true)
        }}>-
        </div>
        <div onClick={(n) => {
          _.merge(this.config, {
            geo: {
              zoom: 1,
            },
          })
          this.moduleChart.setOption(this.config, true)
        }}>
          o
        </div>
      </div>
    </div>
  }
}

Map.propTypes = {
  dispatch: PropTypes.func,
}

export default Map
