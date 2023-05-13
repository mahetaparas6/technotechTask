import * as actionTypes from '../action/actionType';

const initialState = {
  login: {
    success: true,
  },
  user: {
    lang: 'en',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        login: action.data,
      };
    default:
      return state;
  }
};
