import React, { Component } from 'react';
import { Divider } from 'antd';
import axios from 'axios';
import DrawingFileTree from './DrawingFileTree';

class ItemDrawing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      path: ""
    }
  }

  componentDidMount() {
    axios.get("assets/files/towerFiles.json").then(response => {
      const result = response.data;
      if (result && result.children) {
        this.setState({
          treeData: result.children
        })
      }
    })
  }


  onSelect = (selectedKeys, info) => {
    if (info.node.props.dataRef && info.node.props.dataRef.path) {
      this.setState({
        path: info.node.props.dataRef.relativelyPath
      })
    } else {
      this.setState({
        path: ""
      })
    }

  };

  render() {
    const filePath = this.state.path.slice(-4) === ".pdf"
      ? window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/' + this.state.path
      : ''
    console.log('path:', this.state.path, filePath)
    return (
      <div style={{ display: "flex", overflow: "auto" ,height: "100%", width: "100%" }}>
        <div style={{ height: "100%",overflow: "auto"}}>
          <DrawingFileTree defaultExpandAll={false} onSelect={this.onSelect} dataSource={this.state.treeData} />
        </div>
        <Divider type="vertical" style={{ height: "100%", backgroundColor:"black"}}></Divider>
        <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
          {filePath ? <div style={{ textAlign: "center",marginBottom:"10px" }} >
            <a href={filePath} target="view_window">View this file in a new window.</a>
          </div> : null}
          {filePath ? <iframe src={filePath} style={{ width: '100%', height: '100%', border: '0' }} /> : <h3>Folder or file does not support preview.</h3>}
        </div>
      </div>
    );
  }
}

export default ItemDrawing;