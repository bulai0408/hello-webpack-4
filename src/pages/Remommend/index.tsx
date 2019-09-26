import React, { memo, FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { SwiperContainer } from './style';
import { IBannerItem } from '@types';
import * as actions from '@store/actions';

import Swiper from '@components/swiper';
import RecommendList from '@components/recommendList';
import ScrollView from '@baseUI/scrollView';

interface IProps {
  bannerList: IBannerItem[];
  getBanner: () => void;
}

const Recommend: FC<IProps> = memo(props => {
  const { getBanner } = props;

  // mock数据
  const bannerList = [1, 2, 3, 4].map(item => {
    return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' };
  });

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
    return {
      id: 1,
      picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
      playCount: 17178765,
      name: '朴树、许巍、李健、郑钧、老狼、赵雷'
    };
  });

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <SwiperContainer>
      <ScrollView
        className='list'
        direction='vertical'
        click={true}
        bounceTop={true}
        bounceBottom={true}
        refresh={true}
        onScroll={() => {
          console.log('onScroll');
        }}
        pullDown={() => {
          console.log('pulldown');
        }}
        pullUp={() => {
          console.log('pullUp');
        }}
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
  return {
    bannerList: state.getIn(['recommend', 'bannerList'])
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getBanner: () => dispatch(actions.getBannerList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);
