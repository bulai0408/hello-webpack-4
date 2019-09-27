import * as actions from '../constants';
import { ISearchItem } from 'src/types/api_search';

import { getSearchFetch } from '@api';

export const getSearchAction = (data: ISearchItem) => ({
  type: actions.FETCH_SEARCH_INPUT,
  data
});

export const getSearch = (text: string) => async (dispatch: any) => {
  try {
    const res: any = await getSearchFetch(text);
    dispatch(getSearchAction(res.result.songs));
  } catch (error) {
    console.log('出了点问题...');
  }
};
