import styled from 'styled-components';

export const CardItem = styled.div`
  width: 31%;
  height: 100%;
  position: relative;
  .recommend_listener {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: rgba(241, 241, 241, 1);
    box-sizing: border-box;
    padding: 3px 6px 0 0;
    font-size: 12px;
    > i {
      transform: translate3D(0, -2px, 0);
    }
  }
  .recommend_img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .recommend_text {
    margin-top: 2px;
    line-height: 1.3;
    font-size: 12px;
    height: 50px;
  }
`;
