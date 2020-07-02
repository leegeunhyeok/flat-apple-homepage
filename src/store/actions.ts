import * as types from './types';
import { Product } from '../models';

export interface AddCartAction {
  type: typeof types.ADD_CART
  payload: Product
}

export const addCart = (product: Product): AddCartAction => ({
  type: types.ADD_CART,
  payload: product
});
