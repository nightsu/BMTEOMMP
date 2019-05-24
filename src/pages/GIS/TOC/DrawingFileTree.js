import React, { Component } from 'react';
import {Icon,Tree } from 'antd';
import MyIcon from '../../../components/MyIcon';

const { TreeNode } = Tree;

class DrawingFileTree extends Component {
  state = {  }
  

  loop = data => {
    return data.map(item => {
      if (item.children && item.children.length) {
        return (
          <TreeNode icon={<MyIcon  style={{ fontSize: '24px'}} type={item.icon} />} 
            title={<h3 style={{display:"inline",marginLeft:"10px"}}>{item.name}</h3>} 
            key={item.key}
            dataRef = {item}>
            {this.loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode icon={<MyIcon  style={{ fontSize: '24px'}} type={item.icon} />} 
          title={<h3 style={{display:"inline",marginLeft:"10px"}}>{item.name}</h3>} key={item.key} dataRef = {item}/>;
    });
  }
  render() { 
    const {defaultSelectedKeys,dataSource,onSelect} = this.props;

    return ( 
      <div style={{padding:"10px 20px 10px 0px"}}>
        <Tree
          showIcon
          defaultExpandAll
          switcherIcon={<Icon type="down" />}
          onSelect={onSelect}
          defaultSelectedKeys={defaultSelectedKeys}
        >
        {this.loop(dataSource)}

        </Tree>
    </div>
     );
  }
}
 
export default DrawingFileTree;