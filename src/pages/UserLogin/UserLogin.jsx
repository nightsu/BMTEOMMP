import React, { Component } from "react";
import { Link } from "dva/router";
import { Input, Button, Checkbox, Message, Icon } from "antd";

class UserLogin extends Component {
  static displayName = "UserLogin";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: "",
        password: "",
        checkbox: false
      }
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>Sign in</h4>
        <div style={styles.formItems}>
          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="user" size="small" />}
              size="large"
              maxLength={20}
              placeholder="name"
              style={styles.inputCol}
            />
          </div>

          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="lock" size="small" />}
              size="large"
              htmlType="password"
              placeholder="password"
              style={styles.inputCol}
            />
          </div>

          <div style={styles.formItem}>
            <Checkbox style={styles.checkbox}>remember me</Checkbox>
          </div>

          <div style={styles.footer}>
            <Button
              type="primary"
              size="large"
              // onClick={this.handleSubmit}
              style={styles.submitBtn}
            >
              <Link to="/">Sign in</Link>
            </Button>
            <Link to="/user/register" style={styles.tips}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "400px",
    padding: "40px",
    background: "#fff",
    borderRadius: "6px"
  },
  title: {
    margin: "0 0 40px",
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: "28px",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "24px"
  },
  formItem: {
    position: "relative",
    marginBottom: "20px"
  },
  inputIcon: {
    position: "absolute",
    left: "12px",
    top: "12px",
    color: "#666"
  },
  inputCol: {
    width: "100%"
    // paddingLeft: "20px"
  },
  submitBtn: {
    width: "100%"
  },
  tips: {
    marginTop: "20px",
    display: "block",
    textAlign: "center"
  }
};

export default UserLogin;
