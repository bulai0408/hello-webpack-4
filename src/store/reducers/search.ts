import * as actions from '../constants';
import { ISearchItem } from 'src/types/api_search';

const initialState: ISearchItem[] = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_SEARCH_INPUT:
      return [...action.data];
    default:
      return state;
  }
};
