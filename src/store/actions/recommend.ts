import * as actions from '../constants';

import { getBanner, getRecommend } from '@api';
import { IBannerItem, IRecommendItem } from '@types';
import { changeLoading } from './loading';

export const changeBannerList = (data: IBannerItem[]) => ({
  type: actions.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data: IRecommendItem[]) => ({
  type: actions.CHANGE_RECOMMENDLIST,
  data
});

export const getBannerList = () => async (dispatch: any) => {
  try {
    const res: any = await getBanner({ type: 2 });
    dispatch(changeBannerList(res.banners));
    dispatch(changeLoading(false));
  } catch (error) {
    console.log('出了点问题...');
  }
};

export const getRecommendList = () => async (dispatch: any) => {
  try {
    const res: any = await getRecommend();
    dispatch(changeRecommendList(res.result));
  } catch (error) {
    console.log('出了点问题...');
  }
};
