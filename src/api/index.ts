import axios from './config';

import { IBannerParams, IBannerResult } from '@types';

export const getBanner = (params: IBannerParams) => {
  return axios.get<IBannerResult>('/banner', {
    params
  });
};
