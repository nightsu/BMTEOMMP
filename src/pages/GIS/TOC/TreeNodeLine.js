import React from 'react';
import { Modal,  Menu,Dropdown } from 'antd';
import MyIcon from '../../../components/MyIcon';
import ItemInfo from './ItemInfo';


class TreeNodeLine extends React.Component{
  state = {
  }

  onClick = ({ key }) => {
    const { item } = this.props;
    switch (key) {
      case "information":
        this.showInfo(item);
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


  render(){
    const {item} = this.props;

    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="location"><MyIcon type="iconlocation"/>Location</Menu.Item>
        <Menu.Item key="information"><MyIcon type="iconinformation"/>Information</Menu.Item>
        <Menu.Item key="lidar"><MyIcon type="iconyun"/>Lidar</Menu.Item>
      </Menu>
    );
    return(
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span>{item.name}</span>
      </Dropdown>

    )
  }
}

export default TreeNodeLine;
