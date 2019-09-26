import styled from 'styled-components';
import global from '@assets/global-style';

export const RecommendTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 20px 0 20px 10px;
`;

export const RecommendContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2%;
`;

export const ScrollBackgroundModal = styled.div`
  position: absolute;
  background-color: ${global['theme-color']};
  width: 100%;
  height: 400px;
  top: -300px;
  z-index: -1;
`;
