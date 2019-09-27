import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  .content {
    position: relative;
    height: 30px;
    > input {
      position: absolute;
      outline: none;
      width: calc(100% - 60px);
      height: 100%;
      display: block;
      border: 0;
      padding: 0;
      margin: 0;
      background: #ebecec;
      left: 30px;
    }
    .before {
      position: absolute;
      left: 0px;
      width: 30px;
      height: 100%;
      background: #ebecec;
      border-radius: 50% 0 0 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        font-size: 18px;
      }
    }
    .after {
      position: absolute;
      left: calc(100% - 30px);
      width: 30px;
      height: 100%;
      background: #ebecec;
      border-radius: 0 50% 50% 0;
    }
  }
`;
