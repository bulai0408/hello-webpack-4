import * as actions from '../constants';

export const changeLoading = (isLoading: boolean) => ({
  type: actions.CHANGE_LOADING,
  data: isLoading
});
