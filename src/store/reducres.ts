import { Product } from '../models';
import * as types from './types';
import { AddCartAction } from './actions';

export interface CartState {
  products: Product[]
}

const initialState: CartState = {
  products: []
};

const cartReducer = (state = initialState, action: AddCartAction): CartState => {
  switch (action.type) {
    case types.ADD_CART: 
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    default:
      return state;
  };
};

export default cartReducer;
