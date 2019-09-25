import styled from 'styled-components';
import global from '@assets/global-style';

export const RecommendTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0;
  padding: 0 0 0 10px;
`;

export const RecommentContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2%;
  .recommend_item {
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
      font-size: 14px;
      > i {
        transform: translateY(-1px);
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
  }
`;
