import * as types from './types';

export interface SetWidthAction {
  type: typeof types.SET_WIDTH;
  payload: number;
}

export const setWidth = (width: number): SetWidthAction => ({
  type: types.SET_WIDTH,
  payload: width,
});
