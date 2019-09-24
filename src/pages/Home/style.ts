import styled from 'styled-components';
import global from '@assets/global-style';

export const TopBar = styled.div`
  background: ${global['theme-color']};
  color: ${global['font-color-light']};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .iconfont {
    font-size: 25px;
  }
  & > span {
    line-height: 35px;
  }
`;

export const TabBar = styled.div`
  background: ${global['theme-color']};
  color: ${global['font-color-light']};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 41px;
  transform: translate3d(0, -1px, 0);

  a {
    height: 100%;
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: ${global['border-color']};
    -webkit-tap-highlight-color: transparent;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: ${global['font-color-light']};
        border-bottom: 2px solid ${global['font-color-light']};
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
