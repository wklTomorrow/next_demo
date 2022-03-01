
const  { handleActions, createAction } = require('redux-actions');
const Immutable = require('immutable');

const mapStateToProps = state => {
  return {
    ...state.store.toJSON(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setJobListData: list => {
      dispatch(createAction('setJobListData')(list));
    },
    setStatueState: status => {
      dispatch(createAction('setStatueState')(status));
    },
    concatListData: list => {
      dispatch(createAction('concatListData')(list));
    },
  };
};

const initMap = Immutable.Map({
  jobList: [],
  status: 'empty', // empty | loading | error
});


const jobData = handleActions(
  {
    setJobListData: (state, { payload }) => {
      return state.set('jobList', payload);
    },
    setStatueState: (state, { payload }) => {
      return state.set('status', payload);
    },
    concatListData: (state, { payload }) => {
      return state.set('jobList', state.get('jobList').concat(payload));
    },
  },
  initMap
);


module.exports = {
    mapStateToProps, mapDispatchToProps, jobData
}
