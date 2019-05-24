import axios from 'axios';

export default {

  namespace: 'scene',

  state: {
    view:null,
    map:null,
    project:[],
    line:[],
    lot:[],
    tower:[],
    towerland:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch'});
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      try {
        const projectResponse = yield call(() => axios.get("api/project"));
        const project = projectResponse.data;
        const lineResponse = yield call(() => axios.get("api/line"));
        const line = lineResponse.data;
        const lotResponse = yield call(() => axios.get("api/lot"));
        const lot = lotResponse.data;
        const towerResponse = yield call(() => axios.get("api/tower"));
        const tower = towerResponse.data;
        const towerlandResponse = yield call(() => axios.get("api/towerland"));
        const towerland = towerlandResponse.data;
        yield put({ type: 'save',payload:{project,line,lot,tower,towerland} });
      } catch (error) {
        
      }

    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
