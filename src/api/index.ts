import axios from './config';

import { IBannerParams } from '@types';

export const getBanner = (params: IBannerParams) => {
  return axios.get('/banner', {
    params
  });
};

export const getRecommend = () => {
  return axios.get('/personalized?limit=30');
};

export const getSearchFetch = (keywords: string) => {
  return axios.get('/search', {
    params: { keywords }
  });
};
