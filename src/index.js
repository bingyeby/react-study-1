import React, {Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import loadable from 'react-loadable'
import styles from './index.less'
import 'antd/dist/antd.css';

/*
* 载入组件: 同步方式
* */
// import App from './demo-a/app';
// render(<App />, document.getElementById("root"));

/**
 * 载入组件: 异步载入
 *
 */
const Loading = () => {
  return 'loading'
}

const demoa = loadable({loader: () => import('./demo-a/app'), loading: Loading})
const demob = loadable({loader: () => import('./demo-b/index'), loading: Loading})
const democ = loadable({loader: () => import('./demo-c/index'), loading: Loading})
const screenShot = loadable({loader: () => import('./screenShot/index'), loading: Loading})
const comment = loadable({
  loader: () => import(/* webpackChunkName: "comment" */'./demo-comment/comment'),
  loading: Loading
})

render(<div>
  <Router>
    <div className={styles.linkW}>
      <Link to={'/demoa'}>demoa</Link>
      <Link to={'/demob'}>demob</Link>
      <Link to={'/democ'}>democ</Link>
      <Link to={'/comment'}>comment</Link>
      <Link to={'/screenShot'}>screenShot</Link>
    </div>
    <Switch>
      <Route path="/comment" component={comment} />
      <Route path="/demoa" component={demoa} />
      <Route path="/demob" component={demob} />
      <Route path="/democ" component={democ} />
      <Route path="/screenShot" component={screenShot} />
    </Switch>
  </Router>
</div>, document.getElementById("root"));
