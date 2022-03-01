const stateInit = {
    name: 'redux',
    value: Date.now(),
    type: '1'
}

const store = (state = stateInit, action) => {
    const mapFn = {
        'TYPE': (value) => {
            return {
                ...state,
                value
            }
        },
        'default': () => ({...state})
    }
    if (mapFn[action.type]) {
        return mapFn[action.type](action?.value)
    }
    return mapFn['default']()
}

const mapStateToProps = state => {
    return {
        ...state?.store
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setValue: (value) => {
            dispatch({
                type: 'TYPE',
                value
            })
        }
    }
}

module.exports = {
    store,
    mapStateToProps,
    mapDispatchToProps
}

// const  { handleActions, createAction } = require('redux-actions');
// const Immutable = require('immutable');

// // const createAction = require('redux-actions/es/createAction')

// const mapStateToProps = state => {
//   return {
//     jobList: '111',
//     // ...state.jobData.toJSON(),
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setJobListData: list => {
//       dispatch(createAction('setJobListData')(list));
//     },
//     setStatueState: status => {
//       dispatch(createAction('setStatueState')(status));
//     },
//     concatListData: list => {
//       dispatch(createAction('concatListData')(list));
//     },
//   };
// };

// const initMap = Immutable.Map({
//   jobList: [],
//   status: 'empty', // empty | loading | error
// });

// const state = {
//     jobList: [],
//     status: 'empty', // empty | loading | error
// }



// const jobData = handleActions(
//   {
//     setJobListData: (state, { payload }) => {
//       return state.set('jobList', payload);
//     },
//     setStatueState: (state, { payload }) => {
//       return state.set('status', payload);
//     },
//     concatListData: (state, { payload }) => {
//       return state.set('jobList', state.get('jobList').concat(payload));
//     },
//   },
//   Immutable.fromJS({data:{count: 0}})
// );

// console.log(initMap)

// module.exports = {
//     mapStateToProps, mapDispatchToProps, jobData
// }
