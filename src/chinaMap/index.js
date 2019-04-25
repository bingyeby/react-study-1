import React, {Component} from 'react';
import {render} from 'react-dom';

import MapA from './MapA.js';
import MapB from './MapB.js';

export default class Counter extends Component {
  render() {
    return <div>
      <MapA></MapA>
      <MapB></MapB>
    </div>
  }
}

/*
*
* https://www.echartsjs.com/gallery/editor.html?c=effectScatter-map
* https://www.echartsjs.com/gallery/editor.html?c=doc-example/map-example
* https://www.echartsjs.com/gallery/editor.html?c=scatter-map
*
* https://echarts.baidu.com/examples/editor.html?c=map-usa
* */
