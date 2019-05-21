import React, { Component } from "react";
import { connect } from 'dva';
import { Icon, Button, Dropdown, Menu, Badge, Avatar, Modal } from "antd";
import { Link } from "dva/router";
import IconButton from './IconButton';
import MyIcon from '../../../../components/MyIcon';
import Navigation from '../../../../components/Navigation';
import { headerMenuConfig } from '../../../../menuConfig';


const mapStateToProps = (state) => {
  const system = state["system"];
  return {
    TOCVisible: system.TOCVisible,
  };
}

@connect(mapStateToProps)
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { navigationVisible: false };
  }

  TOCVisibleHandle = () => {
    const { TOCVisible } = this.props;
    this.props.dispatch({
      type: `system/save`,
      payload: { TOCVisible: !TOCVisible }
    })
  }

  showNavigation = () => {
    this.setState({
      navigationVisible: true,
    });
  };

  hideNavigation = e => {
    console.log(e);
    this.setState({
      navigationVisible: false,
    });
  };

  render() {
    const menu = (
      <Menu>
        {
          headerMenuConfig.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={item.path}>
                  <Icon type={item.icon} />
                  &nbsp; {item.name}
                </Link>
              </Menu.Item>
            )

          })
        }
      </Menu>
    )

    return (
      <div>
        <div style={styles.header}>
          <div style={styles.headermenu}>
            <IconButton type="iconliebiao" name="List" onClick={this.TOCVisibleHandle} />
            <IconButton type="icontuceng" name="control" onClick={() => alert("profile")} />
            <IconButton type="iconriliriqi2" name="calendar" onClick={() => alert("profile")} />
            <IconButton type="iconwidgets" name="appstore" onClick={this.showNavigation} />
            <IconButton type="iconshezhi" name="setting" onClick={() => alert("profile")} />
          </div>
          <div style={styles.user}>
            <Dropdown overlay={menu}>
              <div>
                <Badge dot>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Badge>
                <span style={{ fontSize: "16", fontWeight: "700" }}> &nbsp;Zhu &nbsp;</span><Icon type="down" />
              </div>
            </Dropdown>
          </div>

        </div>
        <Navigation visible={this.state.navigationVisible} onHide={this.hideNavigation} />
      </div>

    );
  }
}

export default Header;

const styles = {
  header: {
    padding: "0 5px",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headermenu: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    fontSize: "32px",
    color: "#ffffff",
    padding: "5px"
  },
  user: {
    paddingTop: "5px",
    color: "white"
  },

};
