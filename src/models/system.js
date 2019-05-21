
export default {

  namespace: 'system',

  state: {
    currentTab:"scene",
    TOCVisible:true
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'save',payload:{currentTab:"scene"} });
        }else{
          dispatch({ type: 'save',payload:{currentTab:"router"} });
        }

      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
