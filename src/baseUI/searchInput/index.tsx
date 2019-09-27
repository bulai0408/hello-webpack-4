import React, { FC } from 'react';

import { InputContainer } from './style';

interface IProps {
  type: string;
  text: string;
  onTextChange: (text: string) => void;
  placeholder: string;
  onSubmit: () => void;
}

const SearchInput: FC<IProps> = ({ type, text, onTextChange, onSubmit, placeholder }) => {
  /** 回车事件 */
  const inputOnSubmit = (e: any) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <InputContainer>
      <div className='content'>
        <div className='before'>
          <span className='iconfont search'>&#xe62b;</span>
        </div>
        <input
          value={text}
          onChange={(e: any) => {
            onTextChange(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          onKeyUp={inputOnSubmit}
        />
        <div className='after' />
      </div>
    </InputContainer>
  );
};

export default SearchInput;
