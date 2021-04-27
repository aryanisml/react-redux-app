import { Buy_Mobile } from "./action";
const initalState = {
  mobileCount: 10,
};

const MobileReducer = (state = initalState, action) => {
  switch (action.type) {
    case Buy_Mobile:
      return {
        ...state,
        mobileCount: state.mobileCount - 1,
      };
    default:
     return {
         ...state
     }
  }
};

export default MobileReducer;
