import React from 'react';
import { message, Modal, Menu, Dropdown } from 'antd';
import MyIcon from '../../../components/MyIcon';
import ItemInfo from './ItemInfo';
import ItemPicture from './ItemPicture';
import ItemDrawing from './ItemDrawing';


class TreeNodeTower extends React.Component {
  state = {
  }

  onClick = ({ key }) => {
    const { item } = this.props;
    switch (key) {
      case "information":
        this.showInfo(item);
        break;
      case "picture":
        this.showPicture(item);
        break;
      case "drawing":
        this.showDrawing(item);
        break;
      case "land":
        this.showLand(item);
        break;
      default:
        break;
    }

  }

  showInfo = (item) => {
    Modal.info({
      title: item.name,
      icon: <MyIcon type="iconinformation" />,
      mask: false,
      width: 800,
      maskClosable: false,
      footer: null,
      content: (
        <div>
          <ItemInfo dataSource={item.data} />
        </div>
      ),
      onOk() { },
    });
  }


  showLand = (item) => {
    Modal.info({
      title: item.name,
      icon: <MyIcon type="iconland" />,
      mask: false,
      width: 800,
      maskClosable: false,
      footer: null,
      content: (
        <div>
          {item.land ? <ItemInfo dataSource={item.land} /> : <h2>no info.</h2>}
        </div>
      ),
      onOk() { },
    });
  }

  showPicture = (item) => {
    Modal.info({
      title: item.name,
      icon: <MyIcon type="icontupian" />,
      mask: false,
      width: 800,
      maskClosable: false,
      footer: null,
      content: (
        <div>
          <ItemPicture />
        </div>
      ),
      onOk() { },
    });
  }

  showDrawing = (item) => {
    Modal.info({
      title: item.name,
      icon: <MyIcon type="iconicon-book" />,
      mask: false,
      width: 1000,
      maskClosable: false,
      footer: null,
      content: (
        <div style={{ height: "600px" }}>
          <ItemDrawing />
        </div>
      ),
      onOk() { },
    });
  }
  render() {
    const { item } = this.props;

    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="location"><MyIcon type="iconlocation" />Location</Menu.Item>
        <Menu.Item key="information"><MyIcon type="iconinformation" />Information</Menu.Item>
        <Menu.Item key="picture"><MyIcon type="icontupian" />Pictures</Menu.Item>
        <Menu.Item key="drawing"><MyIcon type="iconicon-book" />Drawings</Menu.Item>
        <Menu.Item key="report"><MyIcon type="iconbaogao" />Reports</Menu.Item>
        <Menu.Item key="land"><MyIcon type="iconland" />Land</Menu.Item>
        <Menu.Item key="lidar"><MyIcon type="iconyun" />Lidar</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span>{item.name}</span>
      </Dropdown>

    )
  }
}

export default TreeNodeTower;
