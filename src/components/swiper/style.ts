import styled from 'styled-components';
import global from '@assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  &::after {
    content: '';
    width: 100%;
    height: 60%;
    background: ${global['theme-color']};
    position: absolute;
    display: block;
    top: 0;
    left: 0;
  }
  .swiper-container {
    position: relative;
    width: 96%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .swiper-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${global['theme-color']};
    }
  }
`;
