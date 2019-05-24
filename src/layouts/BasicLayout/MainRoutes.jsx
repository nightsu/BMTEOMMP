import React, { Component } from 'react';
import {  Route, Switch,Redirect } from "dva/router";
import routerData from '../../routerConfig';
import NotFound from '../../components/NotFound';

class MainRoutes extends Component {
  static displayName = 'MainRoutes';

  /**
   * 渲染路由组件
   */
  renderNormalRoute = (item, index) => {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ) : null;
  };

  render() {
    return (
      <Switch>
        {/* 渲染路由表 */}
        {routerData.map(this.renderNormalRoute)}

        {/* 首页默认重定向到 /dashboard */}
        {/* <Redirect exact from="/" to="/scene" /> */}

        {/* 未匹配到的路由重定向到 <Guide> 组件，实际情况应该重定向到 404 */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default MainRoutes;
