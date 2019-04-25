export default {
  backgroundColor: 'white',
  visualMap: [
    {
      min: 0,
      max: 200,
      calculable: true,
      inRange: {
        color: ['#50a3ba', '#eac736', '#d94e5d']
      },
      textStyle: {
        color: '#fff'
      }
    }
  ],
  geo: {
    zoom: 1,// 放大倍数
    map: 'china',
    roam: true,
    label: {
      show: true,
    },
    itemStyle: {
      color: '#e4e4e4',
      borderColor: 'white',
    },
    emphasis: {
      itemStyle: {
        areaColor: '#f0f0f0'
      }
    },
    layoutCenter: ['50%', '40%'],
    layoutSize: 500,
  },
  series: [
    {
      name: 'other',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      // symbolSize (val) {
      //   return val[2] / 3000000000
      // },
      symbol: 'circle',
      symbolRotate: 35,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false,
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          color: 'blue',
        },
      },
    },
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
