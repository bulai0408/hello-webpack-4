import * as actions from '../constants';
import { Dispatch } from 'redux';

import { getBanner, getRecommend } from '@api';
import { IBannerItem, IRecommendItem } from '@types';

export const changeBannerList = (data: IBannerItem[]) => ({
  type: actions.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data: IRecommendItem[]) => ({
  type: actions.CHANGE_RECOMMENDLIST,
  data
});

export const getBannerList = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await getBanner({ type: 2 });
    dispatch(changeBannerList(res.banners));
  } catch (error) {}
};

export const getRecommendList = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await getRecommend();
    dispatch(changeRecommendList(res.result));
  } catch (error) {}
};
