import React, { memo, FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import { SwiperContainer } from './style';
import { IBannerItem, IRecommendItem } from '@types';
import * as actions from '@store/actions';

import Swiper from '@components/swiper';
import RecommendList from '@components/recommendList';
import ScrollView from '@baseUI/scrollView';

interface IProps {
  bannerList: IBannerItem[];
  recommendList: IRecommendItem[];
  getBanner: () => void;
  getRecommend: () => void;
}

const Recommend: FC<IProps> = memo(props => {
  const { getBanner, getRecommend, bannerList, recommendList } = props;

  useEffect(() => {
    getBanner();
    getRecommend();
  }, []);

  return (
    <SwiperContainer>
      <ScrollView
        direction='vertical'
        click={true}
        bounceTop={true}
        bounceBottom={true}
        refresh={true}
        pullDown={() => {
          console.log('pulldown');
        }}
        pullUp={() => {
          console.log('pullUp');
        }}
        onScroll={forceCheck}
      >
        <div>
          <Swiper bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </ScrollView>
    </SwiperContainer>
  );
});

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getBanner: () => dispatch(actions.getBannerList()),
  getRecommend: () => dispatch(actions.getRecommendList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);
