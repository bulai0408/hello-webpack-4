import React, { FC, useRef, useEffect } from 'react';
import BScroll from 'better-scroll';

import { IRecommendRecord } from '@types';
import { RecommendTitle, RecommendContent } from './style';

import SongListCard from '@baseUI/songListCard';

interface IProps {
  recommendList: IRecommendRecord[];
}

const RecommendList: FC<IProps> = ({ recommendList }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const myScroll = new BScroll(scrollRef.current!, {});
    console.log(myScroll);
    return () => {
      console.log('didmount');
    };
  }, []);

  return (
    <div>
      <RecommendTitle>推荐歌单</RecommendTitle>
      <div ref={scrollRef} className='wrapper'>
        <RecommendContent className='content'>
          {recommendList.map((i, index) => (
            <SongListCard key={i.name + index} {...i} />
          ))}
        </RecommendContent>
      </div>
    </div>
  );
};

export default RecommendList;
