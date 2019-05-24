import React, { Component } from 'react';
import {Table } from 'antd';

class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {dataSource} = this.props;
    let data = Object.keys(dataSource).map(key => {
      return {
        key:key,
        value:dataSource[key],
      }
    });
    if(data.length == 0){
      data.push({
        key:"-",
        value:"-"
      })
    }
    
    const columns = [
      {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
    ];
    return ( 
      <Table size="small" bordered pagination={false} dataSource={data} columns={columns} />
     );
  }
}
 
export default ItemInfo;