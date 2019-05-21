
import React, { Component } from 'react';
import NavigationTile from "./NavigationTile";
import { navigationMenuConfig } from "../../menuConfig";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {visible,onHide} = this.props;
    let display = visible?"block":"none";
    const maskStyle = {...styles.mask,...{display}};
    return (
      <div style={maskStyle} onClick={onHide}>
        <div style={styles.container}>
          <div style={styles.title}  onClick={e=>e.stopPropagation()}>Business Navigation</div>
          <div style={styles.content}>
            {
              navigationMenuConfig.map((item, index) => {
                return <NavigationTile key={index} {...item} />
              })
            }
          </div>
        </div>
      </div>

    );
  }
}

export default Navigation;

const styles = {
  mask:{
    zIndex:1000,
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    margin: "auto",
    width: "100wh",
    height: "100vh",
    backgroundColor:"rgb(217, 217, 217)",
    opacity:"0.8"
  },
  container: {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    margin: "auto",
    width: "600px",
    height: "240px",
    padding: "20px",
    backgroundColor: "#000",
    textAlign: "center",
    borderRadius:"10px"
  },
  content: {
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#ffffff",
    fontSize: "20px",
    padding: "10px 0 20px"
  },
  name: {
    color: "#ffffff",
    fontSize: "16px",
    padding: "10px 0"
  },
  button: {
    fontSize: "80px",
    color: "#ffffff",
    padding: "5px"
  },
};