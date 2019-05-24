
import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon, Tree } from 'antd';
import MyIcon from '../../../components/MyIcon';
import TreeNodeTower from './TreeNodeTower';
import TreeNodeLine from './TreeNodeLine';

const { TreeNode } = Tree;

const mapStateToProps = (state) => {
  const scene = state["scene"];
  return {
    project: scene.project,
    line: scene.line,
    lot: scene.lot,
    tower: scene.tower,
    towerland:scene.towerland,
  };
}

@connect(mapStateToProps)
export default class TOC extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // componentDidMount(){
  //   const {dispatch} = this.props;
  //   dispatch({
  //     type:"scene/fetch"
  //   })
  // }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    if (info.node.props.dataRef) {
      console.log('dataRef', info.node.props.dataRef);
    } else {
      console.log('dataRef', {});
    }
  };

  getTreeNodeByType = (item) => {
    switch (item.type) {
      case "project":
        return <TreeNodeLine item={item} />;
      case "line":
        return <TreeNodeLine item={item} />
      case "lot":
        return <TreeNodeLine item={item} />
      case "tower":
        return <TreeNodeTower item={item} />
      default:
        return <span>{item.name}</span>
    }
  }

  loop = data => {
    return data.map(item => {
      if (item.children && item.children.length) {
        return (
          <TreeNode icon={<MyIcon style={{ fontSize: '18px' }} type={`icon${item.type}`} />}
            title={this.getTreeNodeByType(item)}
            key={item.id}
            dataRef={item.data}>
            {this.loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode icon={<MyIcon style={{ fontSize: '18px' }} type={`icon${item.type}`} />}
        title={this.getTreeNodeByType(item)} key={item.id} dataRef={item.data} />;
    });
  }

  render() {
    const { project, line, lot, tower,towerland } = this.props;
    const projectsTreeData = project.map((projectItem, index) => {
      const projectTreeData = {};
      projectTreeData.type = "project";
      projectTreeData.name = projectItem.name;
      projectTreeData.id = projectItem.id;
      projectTreeData.data = projectItem;
      let lines = line.filter(lineItem => lineItem.projectID == projectItem.id);
      projectTreeData.children = lines.map((lineItem, index) => {
        const lineTreeData = {};
        lineTreeData.type = "line";
        lineTreeData.name = lineItem.name;
        lineTreeData.id = lineItem.id;
        lineTreeData.data = lineItem;
        let lots = lot.filter(lotItem => lotItem.transmissionLineID == lineItem.id);
        lineTreeData.children = lots.map((lotItem, index) => {
          const lotTreeData = {};
          lotTreeData.type = "lot";
          lotTreeData.name = lotItem.name;
          lotTreeData.id = lotItem.id;
          lotTreeData.data = lotItem;
          let towers = tower.filter(towerItem => towerItem.lotID == lotItem.id);
          lotTreeData.children = towers.map((towerItem, index) => {
            const towerTreeData = {};
            towerTreeData.type = "tower";
            towerTreeData.name = towerItem.name;
            towerTreeData.id = towerItem.id;
            towerTreeData.data = towerItem;
            towerTreeData.land = towerland.find(item => towerItem.towerLandID === item.id);
            towerTreeData.children = [];
            return towerTreeData;
          })
          return lotTreeData;
        });
        return lineTreeData;
      })
      return projectTreeData;
    })
    console.log("projectsTreeData", projectsTreeData);
    return (
      <div style={{ overflow: "auto", height: "100%", width: "300px" }}>
        <Tree
          style={{ width: "300px" }}
          showIcon
          defaultExpandAll
          switcherIcon={<Icon type="down" />}
          onSelect={this.onSelect}
        >
          {this.loop(projectsTreeData)}

        </Tree>
      </div>
    );
  }
}