import React, { FC, useRef, useEffect } from 'react';

import { IRecommendRecord } from '@types';
import { RecommendTitle, RecommendContent, ScrollBackgroundModal } from './style';

import SongListCard from '@baseUI/songListCard';

interface IProps {
  recommendList: IRecommendRecord[];
}

const RecommendList: FC<IProps> = ({ recommendList }) => {
  return (
    <div>
      <ScrollBackgroundModal />
      <RecommendTitle>推荐歌单</RecommendTitle>
      <RecommendContent>
        {recommendList.map((i, index) => (
          <SongListCard key={i.name + index} {...i} />
        ))}
      </RecommendContent>
    </div>
  );
};

export default RecommendList;
