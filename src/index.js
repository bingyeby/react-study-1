import React, {Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import loadable from 'react-loadable'
import styles from './index.less'
import 'antd/dist/antd.css';

/*
* 载入组件方式1: 同步方式
* */
// import App from './demo-a/app';
// render(<App />, document.getElementById("root"));

/*
 * 载入组件方式2: 异步载入
 */
const Loading = (info) => {
  if (info.error) {
    return <div style={{whiteSpace: 'pre', color: 'red'}}>
      {info.error.stack}
    </div>
  }
  return 'loading...'
}

let RouterConfig = [
  {
    path: '/demo-a',
    component: loadable({loader: () => import('./demo-a/app'), loading: Loading})
  },
  {
    path: '/demo-b',
    component: loadable({loader: () => import('./demo-b/index'), loading: Loading})
  },
  {
    path: '/demo-c',
    component: loadable({loader: () => import('./demo-c/index'), loading: Loading})
  },
  {
    path: '/demo-comment',
    component: loadable({
      loader: () => import(/* webpackChunkName: "comment" */'./demo-comment/comment'),
      loading: Loading
    })
  },
  {
    path: '/screenShot',
    name: '截屏',
    component: loadable({loader: () => import('./screenShot/index'), loading: Loading})
  },
  {
    path: '/chinaMap',
    name: '省市区地图联动',
    component: loadable({loader: () => import('./chinaMap/index'), loading: Loading})
  },
  {
    path: '/chinaMapD3',
    name: '中国地图D3',
    component: loadable({loader: () => import('./chinaMapD3/index'), loading: Loading})
  },
]

render(<div className={styles.outer}>
  <Router>
    <div className={styles.nav}>
      {
        RouterConfig.map((n, i) => {
          return <Link key={i} to={n.path}>{n.name || n.path}</Link>
        })
      }
    </div>
    <div className={styles.content}>
      <Switch>
        {
          RouterConfig.map((n, i) => {
            return <Route key={i} path={n.path} component={n.component} />
          })
        }
      </Switch>
    </div>
  </Router>
</div>, document.getElementById("root"));
