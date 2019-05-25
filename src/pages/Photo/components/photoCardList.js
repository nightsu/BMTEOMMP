import React from 'react';
import PhotoCard from './photoCard';
import { Button, List, Spin } from 'antd';
import { connect } from 'dva';
import 'antd/dist/antd.css';

function PhotoCardList({ dispatch,dataSource,loading }) {

    function onClickHandler(){
        dispatch({
            type: 'photos/downloads',
            payload: {},
          });
    }
    function onSelectAllHandler(){
        dispatch({
            type: 'photos/selectall',
            payload: {},
          });
    }
    function onInvSelectHandler(){
        dispatch({
            type: 'photos/invselect',
            payload: {},
          });
    }
    return (
        <div>
            <Button onClick={onClickHandler}>批量下载</Button>
            <Button onClick={onSelectAllHandler}>全选</Button>
            <Button onClick={onInvSelectHandler}>反选</Button>
            <Spin spinning={loading}>
            <List
                grid={{
                    gutter:16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}
                dataSource={dataSource}
                renderItem={data => (
                    <List.Item>
                        <PhotoCard id={data.id} url={data.url} tod={data.tod} title={data.title}></PhotoCard>
                        
                    </List.Item>
                )}
            />
            </Spin>
        </div>
    );
}


function mapStateToProps(state) {
    const {list} = state.photos;
    return {
      dataSource:list,
      loading:state.loading.models.photos
    };
  }
  

export default connect(mapStateToProps)(PhotoCardList);