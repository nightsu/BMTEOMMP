import React, { Component } from "react";
import { Icon,Tooltip } from 'antd';
import MyIcon from '../../../../components/MyIcon';

class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type,name,onClick } = this.props;
    return (
        <div className="headerbutton">
        <Tooltip  title={name}>
          <MyIcon style={styles.button} type={type} theme="filled" onClick={onClick}/>
      </Tooltip>
      </div>

    );
  }
}

export default IconButton;

const styles = {
  button: {
    fontSize: "32px",
    color: "#ffffff",
    padding: "5px"
  }
};
