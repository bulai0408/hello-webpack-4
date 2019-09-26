import { IBannerItem } from '../../types/api_banner';
import * as actions from '../constants';

const bannerList: IBannerItem[] = [];
const recommendList: [] = [];

const initialState = {
  bannerList,
  recommendList
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_BANNER:
      return {
        ...state,
        bannerList: action.data
      };
    case actions.CHANGE_RECOMMENDLIST:
      return {
        ...state,
        recommendList: action.data
      };
    default:
      return state;
  }
};
