import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './map.less'
import * as d3 from 'd3'

window.d3 = d3

import data from './china.geojson.js'

class Map extends React.Component {
  componentDidMount() {
    const containerWidth = 500
    const containerHeight = 500
    const margin = {
      top: 80,
      right: 20,
      bottom: 30,
      left: 60
    }
    const width = containerWidth - margin.left - margin.right
    const height = containerHeight - margin.top - margin.bottom
    let chart = d3
      .select(this.chartRef)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    let projection = d3
      .geoMercator() // 定义墨卡托地理投射(平面投射)
      .center([107, 31])
      .scale(d3.min([width, height]))
      .translate([width / 2, height / 2])

    let path = d3
      .geoPath() // 定义路径
      .projection(projection)

    /*
    * D3.v5 不再提供类似 d3.schemeCategory20* 的分类颜色方案。这二十种颜色方案存在明显缺陷，因它们的分组设计可能会错误的暗示数据之间的关系：一份共享的色调可能意味着对应的数据会归属到同一组别中，而颜色亮度的深浅可能会暗示数据的顺序。 取而代之的是，D3现在包含一个库叫 d3-scale-chromatic，它实现了 ColorBrewer 中的一些优秀的配色方案，这包括分类，发散，连续单色以及连续多色 等方案。这些方案既支持离散变量同时也支持连续变量赋值。
    * d3.schemeSet3: An array of twelve categorical colors represented as RGB hexadecimal strings.
    * https://github.com/d3/d3-scale-chromatic
    * */
    // let z = d3.scaleOrdinal(d3.schemeSet3) // 固定数量色值
    let z = d3.scaleSequential()
      .domain([0, 50])
      .interpolator(d3.interpolateRainbow) // 彩虹色系


    let defs = chart.append("defs");


    /*
    * 增加背景
    * https://www.jianshu.com/p/58681f1d69ed
    * 先添加filter
    * 后添加背景块
    * */
    let arrowMarker = defs.append("filter")
      .attr("id", "filter1")
      .attr("x", "0")
      .attr("y", "0")
      .attr("width", "200%")
      .attr("height", "200%")
    arrowMarker.append('feOffset')
      .attr("result", "blurOut")
      .attr("in", "SourceGraphic")
      .attr("dx", "10")
      .attr("dy", "10")
    arrowMarker.append('feGaussianBlur')
      .attr("result", "blurOut")
      .attr("in", "offOut")
      .attr("stdDeviation", "10")
    arrowMarker.append('feBlend')
      .attr("in", "SourceGraphic")
      .attr("in2", "blurOut")
      .attr("mode", "normal")
    chart.append("g")
      .attr("filter", "url(#filter1)")
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr("fill", "rgba(45,107,253,1)")
      .attr('style', 'border: 1px solid #fff;')
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("stroke", "rgba(45,107,253,1)")
      .attr("stroke-width", 1)
      .attr("fill", "rgba(45,107,253,1)")
      .attr("d", path)
      .select('circle')
      .data(data.features)
      .enter()
      .append("circle")
      .attr('cx', '0')
      .attr('cy', '0')
      .attr('r', 500)
      .attr('fill', 'transparent')


    let g = chart
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')') // 设最外包层在总图上的相对位置
      .style('fill-opacity', 0)

    g.transition()
      .duration(1000)
      .style('fill-opacity', 1) // 动画渐现

    g
      .selectAll('path') // 绘画所有的省
      .data(data.features)
      .enter()
      .append('path')
      .attr('stroke', 'transparent')
      .attr('stroke-width', 1)
      .attr('fill', function (d, i) {
        return z(i)
      })
      .attr('d', path)
      .attr('data-name', function (d) {
        return d.properties.name
      })
      .on('mouseover', function (d, i) {
        d3.select(this).attr('fill', d3.color(z(i)).brighter().toString()) // 高亮色
        // 获取名字
        // d3.select(this).attr('data-name')
        // d.properties.name
      })
      .on('mouseout', function (d, i) {
        d3.select(this).attr('fill', z(i))
      })


    chart
      .append('g') // 输出标题
      .attr('class', 'bar--title')
      .append('text')
      .attr('fill', '#000')
      .attr('font-size', '16px')
      .attr('font-weight', '700')
      .attr('text-anchor', 'middle')
      .attr('x', containerWidth / 2)
      .attr('y', 20)
      .text('中国地图')
  }

  render() {
    return (
      <div className="china-map-chart--simple">
        <svg ref={r => (this.chartRef = r)}></svg>
      </div>
    )
  }
}


Map.propTypes = {
  dispatch: PropTypes.func,
}

export default Map
