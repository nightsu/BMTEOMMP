import React, { Component } from 'react';
import { Link } from "dva/router";
import notfoundimg from './img/notfound.png';

export default class NotFound extends Component {
  static displayName = 'NotFound';

  render() {
    return (
      <div>
          <div style={styles.exceptionContent}>
            <img
              src={notfoundimg}
              style={styles.image}
              className="imgException"
              alt="页面不存在"
            />
            <div className="prompt">
              <h3 style={styles.title} >
                抱歉，你访问的页面不存在
              </h3>
              <p style={styles.description} >
                您要找的页面没有找到，请返回
                <Link to="/">首页</Link>
                继续浏览
              </p>
            </div>
          </div>
      </div>
    );
  }
}

const styles = {
  exceptionContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: "20px",
    margin: "10px 0",
    color: '#333',
  },
  image: {
    maxWidth: "260px",
    marginRight: "50px"
  },
  description: {
    color: '#666',
    fontSize: "14px"
  },
};
