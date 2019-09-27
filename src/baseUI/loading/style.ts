import styled from 'styled-components';
import global from '@assets/global-style';

export const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${global['background-color']};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
