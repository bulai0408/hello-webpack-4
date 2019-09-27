import * as actions from '../constants';

interface ILoading {
  isLoading: boolean;
}

const initialState: ILoading = {
  isLoading: true
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_LOADING:
      return {
        ...state,
        isLoading: action.data
      };
    default:
      return state;
  }
};
