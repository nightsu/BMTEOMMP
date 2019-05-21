import React, { Component } from "react";
import { Layout, Icon, Button } from "antd";
import { Link } from "dva/router";
import MyIcon from '../MyIcon';

class NavigationTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {name,path,icon,newWindow} = this.props;
    return (
      <div className="headerbutton">
        <Link to={path}>
          <MyIcon style={styles.button} type={icon} theme="filled" />
          <div style={styles.name}>{name}</div>
        </Link>

      </div>
    );
  }
}

export default NavigationTile;

const styles = {
  button: {
    fontSize: "80px",
    color: "#ffffff",
    padding: "5px"
  },
  name:{
    color:"#ffffff",
    fontSize: "16px",
    padding:"5px 0"
  },
};
