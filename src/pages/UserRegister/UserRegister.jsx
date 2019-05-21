import React, { Component } from "react";
import { Link } from "dva/router";
import { Input, Button, Message, Icon } from "antd";

class UserRegister extends Component {
  static displayName = "UserRegister";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: "",
        email: "",
        passwd: "",
        rePasswd: ""
      }
    };
  }
  render() {
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>Sign up</h4>
        <div style={styles.formItems}>
          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="user" size="small" />}
              size="large"
              placeholder="name"
              style={styles.inputCol}
            />
          </div>

          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="mail" size="small" />}
              size="large"
              maxLength={20}
              placeholder="email"
              style={styles.inputCol}
            />
          </div>

          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="lock" size="small" />}
              htmlType="password"
              size="large"
              placeholder="Create password"
              style={styles.inputCol}
            />
          </div>

          <div style={styles.formItem}>
            <Input
              prefix={<Icon type="lock" size="small" />}
              htmlType="password"
              size="large"
              placeholder="Confirm password"
              style={styles.inputCol}
            />
          </div>

          <div className="footer">
            <Button
              type="primary"
              onClick={this.handleSubmit}
              style={styles.submitBtn}
              size="large"
            >
              Sign up
            </Button>
            <Link to="/user/login" style={styles.tips}>
              Sign in
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
    lineHeight:"24px"
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
    width: "100%",
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

export default UserRegister;
