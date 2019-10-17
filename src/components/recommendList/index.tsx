import React, { FC } from 'react';

import { IRecommendItem } from '@types';
import { RecommendContainer, RecommendContent, ScrollBackgroundModal } from './style';

import SongListCard from '@baseUI/songListCard';
import { PartScreenLoading } from '@baseUI/loading';

interface IProps {
  recommendList: IRecommendItem[];
}

const RecommendList: FC<IProps> = ({ recommendList }) => {
  return (
    <RecommendContainer>
      <ScrollBackgroundModal />
      <div className='title'>推荐歌单</div>
      <PartScreenLoading />
      <RecommendContent>
        {recommendList.map(i => (
          <SongListCard key={i.id} {...i} />
        ))}
      </RecommendContent>
    </RecommendContainer>
  );
};

export default RecommendList;
