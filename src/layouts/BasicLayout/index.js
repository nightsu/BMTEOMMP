import React, { Component } from "react";
import { Icon, Tabs, Layout, Row, Col } from "antd";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import MyIcon from "../../components/MyIcon";
import Scene from "../../pages/GIS/Scene";
import { connect } from 'dva';


const TabPane = Tabs.TabPane;
const { Footer, Sider, Content } = Layout;

const mapStateToProps = (state) => {
  const system = state["system"];
  return {
    currentTab: system.currentTab,
    TOCVisible: system.TOCVisible,
  };
}

@connect(mapStateToProps)
export default class BasicLayout extends Component {
  render() {
    const { currentTab,TOCVisible } = this.props;
    const sceneDisplay = currentTab === "scene" ? "flex" : "none";
    const routerDisplay = currentTab === "router" ? "flex" : "none";
    const TOCDisplay = TOCVisible? "flex" : "none";
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          <MyIcon style={styles.logo} type="icondiqiu" />
          <span>BMTE Operation and Maintenance Management Platform</span>
        </div>
        <Header />
        <Layout style={{ display: sceneDisplay }}>
          <Sider theme="light" style={{ display: TOCDisplay }}/>
          <Content >
            <Scene />
          </Content>
        </Layout>
        <Layout style={{ display: routerDisplay }}>
          <Content>
            <MainRoutes />
          </Content>
        </Layout>

      </div>
    );
  }
}

const styles = {
  container: {
    height: "100vh",
    width: "100wh",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    height: "30px",
    marginLeft: "10px",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.5",
    display: "flex"
  },
  logo: {
    margin: "5px 5px 0 0"
  },
  content: {
    height: "100%"
  },
  // tabs: {
  //   height: "100%"
  // },
  tab: {
    height: "800px"
  }
};
