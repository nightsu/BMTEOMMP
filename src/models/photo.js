import * as photoService from '../services/photo';

export default {
  namespace: 'photos',
  state: {
    list: []
  },
  reducers: {
    save(state, { payload: {list} }) {
      console.log({...state, list});
      return { ...state, list};
    },
    checked(state,{payload:{id}}){
      let templist=state.list;
      let photolist=[];
      photolist=photolist.concat(templist);
      photolist[id].tod=!photolist[id].tod;
     return {...state,...{list:photolist}};
    },
    selectall(state,{payload:{}}){
      let templist=state.list;
     let newlist=templist.map(p => {
      p.tod=true;
      return p;
     });
      const newstate = {...state,...{list:newlist}};
      console.log(newstate);
      return newstate;
    },
    invselect(state,{payload:{}}){
      let templist=state.list;
      let photolist=templist.map(p=>{
        p.tod=!p.tod
        return p;
      });
     return {...state,...{list:photolist}};
    }
  },
  effects: {
    *fetch({ payload: {} }, { call, put }) {
      const list  = yield call(photoService.fetch, {  });
      console.log(list);
      yield put({
        type: 'save',
        payload: {
          list
        },
      });
  },
  
    *download({ payload: { id} }, { call, put, select }) {
      let list=yield select(state => state.photos.list );
      let photo=list[id];
        fetch(photo.url).then(res => res.blob().then(blob => {
          let a = document.createElement('a');
          let url = window.URL.createObjectURL(blob);
          let filename = photo.title;
          if (filename) {
              // filename = filename.match(/\"(.*)\"/)[1]; //提取文件名
              a.href = url;
              a.download = filename; //给下载下来的文件起个名字
              a.click();
              window.URL.revokeObjectURL(url);
              a = null;
          }
      }));   
    },

    *downloads({ payload: {} }, { call,put,select }) {
      let list=yield select(state => state.photos.list );
      list.map(p=>{
        if(p.tod===true){
          fetch(p.url).then(res => res.blob().then(blob => {
            let a = document.createElement('a');
            let url = window.URL.createObjectURL(blob);
            let filename = p.title;
            if (filename) {
                // filename = filename.match(/\"(.*)\"/)[1]; //提取文件名
                a.href = url;
                a.download = filename; //给下载下来的文件起个名字
                a.click();
                window.URL.revokeObjectURL(url);
                a = null;
            }
        }));  
        }
      });
      
  },
    
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log("%%%%");
      return history.listen(({ pathname}) => {
        if (pathname === '/photo') {
          console.log(dispatch);
          dispatch({ type: 'fetch', payload: {}});
        }
      });
    },
  },
};
