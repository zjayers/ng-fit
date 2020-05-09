import * as t from './shared/types';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export const appReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case t.START_LOADING:
      return { ...state, isLoading: true };
    case t.STOP_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
