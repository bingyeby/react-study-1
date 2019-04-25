export default {
  backgroundColor: 'white',
  visualMap: {
    left: 'left',
    min: 0,
    max: 200,
    inRange: {
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
    },

    text: ['High', 'Low'], // 文本，默认为数值文本
    calculable: true,
  },
  series: [
    {
      name: 'USA PopEstimates',
      zoom: 1,
      type: 'map',
      roam: true,
      map: 'china',
      label: {
        normal: {
          show: true,
        },
        emphasis: {
          color: 'blue',
        },
      },
      itemStyle: {
        emphasis: {
          areaColor: '',// 高亮色
          borderColor: 'white',
          borderWidth: 2,
          label: {show: true},
        },
      },
      // 文本位置修正
      textFixed: {
        Alaska: [20, -20],
      },
      data: [
        {name: '江苏', value: 10},
        {name: '安徽', value: 20},
      ],
    },
    // {
    //   name: 'other',
    //   type: 'scatter',
    //   coordinateSystem: 'geo',
    //   data: [],
    //   // symbolSize (val) {
    //   //   return val[2] / 3000000000
    //   // },
    //   symbol: 'circle',
    //   symbolRotate: 35,
    //   label: {
    //     normal: {
    //       formatter: '{b}',
    //       position: 'right',
    //       show: false,
    //     },
    //     emphasis: {
    //       show: true,
    //     },
    //   },
    //   itemStyle: {
    //     normal: {
    //       color: color['@color-aux-b-2'],
    //     },
    //   },
    // },
    // {
    //   name: 'top5',
    //   type: 'effectScatter',
    //   visualMap: false,
    //   coordinateSystem: 'geo',
    //   data: '',
    //   // symbolSize: function (val) {
    //   //   return val[2] / 3;
    //   // },
    //   showEffectOn: 'emphasis',
    //   rippleEffect: {
    //     brushType: 'stroke',
    //   },
    //   hoverAnimation: true,
    //   label: {
    //     normal: {
    //       formatter: '{b}',
    //       position: 'right',
    //       show: true,
    //       color: color['@color-aux-b-1'],
    //     },
    //   },
    //   itemStyle: {
    //     normal: {
    //       color: color['@color-aux-b-1'],
    //       shadowBlur: 10,
    //       shadowColor: color['@color-aux-e-1'],
    //     },
    //   },
    //   zlevel: 1,
    // },
  ],
}
