import { Card, Icon, Avatar, Checkbox } from 'antd';
import Photo from './photo';
import { connect } from 'dva';
import React,{useState} from 'react';


const { Meta } = Card;
function PhotoCard({ dispatch, id, url, tod, title }) {

  let [mouseEnter,setMouseEnter]=useState(false);
  function onDownloadHandler() {
    dispatch({
      type: 'photos/download',
      payload: { id },
    });
  }
  function onChangeHandler(id) {
    dispatch({
      type: 'photos/checked',
      payload: { id },
    });
  }

  function onMouseEnterHandler(){
      setMouseEnter(true);
  }

  function onMouseLeaveHandler() {
          setMouseEnter(false);
  }


  return (
    <Card hoverable
    style={mouseEnter?styles.enterStyle:styles.leaveStyle}
      cover={
        <Photo url={url} title={title}></Photo>
      }
      onMouseEnter={onMouseEnterHandler.bind(this)}
      onMouseLeave={onMouseLeaveHandler.bind(this)}
      actions={[<Checkbox checked={tod} onChange={onChangeHandler.bind(null, id)} />, <Icon type="info" />, <Icon type="download" onClick={onDownloadHandler.bind(null, url)} />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={title}
        description="This is the description"
      />
    </Card>
  );

};



export default connect()(PhotoCard);
const styles = {
  enterStyle: {
    borderRadius: "6px"
  },
  leaveStyle: {
    borderRadius: "6px"
  },
}