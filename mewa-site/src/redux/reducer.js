import { SET_OCID_DATA } from './action';

const initialState = {
  ocidData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OCID_DATA:
      return {
        ...state,
        ocidData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;