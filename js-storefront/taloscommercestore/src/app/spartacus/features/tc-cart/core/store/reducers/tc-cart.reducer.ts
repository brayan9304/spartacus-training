import { Cart } from '@spartacus/core';
import { TcCartActions } from '../actions';

export const initialState: Cart[] = [];

export function reducer(
  state = initialState,
  action: TcCartActions.TcCartAction
): Cart[] {
  switch (action.type) {
  }
  return state;
}
