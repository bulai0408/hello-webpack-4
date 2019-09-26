import React, { useEffect, useState, FC, useImperativeHandle, useRef, forwardRef } from 'react';
import BScroll from '@better-scroll/core';
import styled from 'styled-components';

interface IProps {
  direction: 'vertical' | 'horizontal'; // 滚动的方向
  click: boolean; // 是否支持点击
  refresh: boolean; // 是否刷新
  onScroll: (pos: any) => void; // 滑动触发的回调函数
  pullUp: () => void; // 上拉加载逻辑
  pullDown: () => void; // 下拉加载逻辑
  bounceTop: boolean; // 是否支持向上吸顶
  bounceBottom: boolean; // 是否支持向下吸底
  className: string;
}

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ScrollView: FC<IProps> = forwardRef((props, ref: any) => {
  const [myBScroll, setMyBScroll] = useState<BScroll | null>(null);

  const scrollViewRef = useRef(null);

  /** https://zh-hans.reactjs.org/docs/hooks-reference.html#useref */
  useImperativeHandle(ref, () => ({
    refresh() {
      if (myBScroll) {
        myBScroll.refresh();
        myBScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (myBScroll) {
        return myBScroll;
      }
    }
  }));

  const {
    direction = 'vertical',
    click = true,
    refresh = true,
    onScroll = null,
    pullUp = null,
    pullDown = null,
    bounceTop = true,
    bounceBottom = true
  } = props;

  /** 初始化注册scroll */
  useEffect(() => {
    const newScroll = new BScroll(scrollViewRef.current!, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setMyBScroll(newScroll);
    return () => {
      setMyBScroll(null);
    };
  }, []);

  /** 每次更新刷新scroll */
  useEffect(() => {
    if (refresh && myBScroll) {
      console.log(666);
      myBScroll.refresh();
    }
  });

  /** 监听滚动 */
  useEffect(() => {
    if (!myBScroll || !onScroll) {
      return;
    }
    myBScroll.on('scroll', (pos: any) => {
      onScroll(pos);
    });
    return () => {
      myBScroll.off('scroll');
    };
  }, [onScroll, myBScroll]);

  /** 上拉到底监听 */
  useEffect(() => {
    if (!myBScroll || !pullUp) {
      return;
    }
    myBScroll.on('scrollEnd', () => {
      console.log(myBScroll.y, myBScroll.maxScrollY);
      if (myBScroll.y < myBScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      myBScroll.off('scrollEnd');
    };
  }, [pullUp, myBScroll]);

  /** 下拉刷新监听 */
  useEffect(() => {
    if (!myBScroll || !pullDown) {
      return;
    }
    myBScroll.on('touchEnd', ({ y }: any) => {
      if (y > 50) {
        pullDown();
      }
    });
    return () => {
      myBScroll.off('touchEnd');
    };
  }, [pullUp, myBScroll]);

  return <ScrollContainer ref={scrollViewRef}>{props.children}</ScrollContainer>;
});

export default ScrollView;
