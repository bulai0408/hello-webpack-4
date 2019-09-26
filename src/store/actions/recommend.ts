import * as actions from '../constants';
import { fromJS } from 'immutable';
import { Dispatch } from 'redux';

import { getBanner } from '@api';
import { IBannerItem } from '@types';

export const changeBannerList = (data: IBannerItem[]) => ({
  type: actions.CHANGE_BANNER,
  data: fromJS(data)
});

export const getBannerList = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await getBanner({ type: 2 });
    dispatch(changeBannerList(res.banners));
  } catch (error) {}
};
