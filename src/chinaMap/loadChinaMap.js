import echarts from 'echarts'
import _ from 'lodash'

// import 'echarts/map/js/china'  // 引入中国地图 源于数据吉林省市未做区别,特殊处理

import './mapData/china'// 将吉林修改为吉林省 空格控制显示
import './mapData/jilin'// 将吉林修改为吉林省

// 引入省市数据
const context2 = require.context('echarts/map/js/province', true, /\.js$/)
_.each(context2.keys(), (contextKey) => {
  context2(contextKey)
})

// 引入 市区数据
const context3 = require.context('echarts-china-cities-js/echarts-china-cities-js', true, /\.js$/)
_.each(context3.keys(), (contextKey) => {
  context3(contextKey)
})


let cityList = _.sortBy(_.map(echarts.getMap('china').geoJson.features, (n) => {
  return {
    value: n.id,
    label: n.properties.name,
    children: _.sortBy(_.map(_.get(echarts.getMap(n.properties.name), 'geoJson.features'), (n) => {
      return {
        value: n.id,
        label: n.properties.name,
        children: _.sortBy(_.map(_.get(echarts.getMap(n.properties.name.replace('市', '').replace('锡林郭勒盟', '锡林郭勒')), 'geoJson.features'), (n) => {
          return {
            value: n.id,
            label: n.properties.name,
          }
        }), 'value'),
      }
    }), 'value'),
  }
}), 'value')

let getNameWithCode = (code) => {
  let returnName = ''
  _.each(cityList, (n) => {
    if (n.value === code) {
      returnName = n.label
    }
    _.each(n.children, (n) => {
      if (n.value === code) {
        returnName = n.label
      }
      _.each(n.children, (n) => {
        if (n.value === code) {
          returnName = n.label
        }
      })
    })
  })
  return returnName
}

let getCodeWithName = (name) => {
  let returnCode = ''
  _.each(cityList, (n) => {
    if (n.label === name) {
      returnCode = n.value
    }
    _.each(n.children, (n) => {
      if (n.label === name) {
        returnCode = n.value
      }
      _.each(n.children, (n) => {
        if (n.label === name) {
          returnCode = n.value
        }
      })
    })
  })
  return returnCode
}

let getInfoWithCodeName = (codeOrName) => {
  if (codeOrName === 'china' || codeOrName === '231' || codeOrName === '') {
    return {
      value: '231',
      label: 'china',
      children: cityList,
      level: 0,
    }
  }
  let returnInfo
  _.each(cityList, (n) => {
    if (n.value === codeOrName || n.label === codeOrName) {
      returnInfo = n
      returnInfo.level = 1
    }
    _.each(n.children, (n) => {
      if (n.value === codeOrName || n.label === codeOrName) {
        returnInfo = n
        returnInfo.level = 2
      }
      _.each(n.children, (n) => {
        if (n.value === codeOrName || n.label === codeOrName) {
          returnInfo = n
          returnInfo.level = 3
        }
      })
    })
  })
  return returnInfo
}

export {
  cityList,
  getNameWithCode,
  getCodeWithName,
  getInfoWithCodeName,
}

