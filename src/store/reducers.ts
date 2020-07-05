import { combineReducers } from 'redux';
import * as types from './types';
import { SetWidthAction } from './actions';

export interface CommonState {
  width: number;
}

const initialState: CommonState = {
  width: -1,
};

const commonReducer = (
  state = initialState,
  action: SetWidthAction
): CommonState => {
  switch (action.type) {
    case types.SET_WIDTH:
      return {
        ...state,
        width: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  commonReducer,
});

export default rootReducer;
