import React, { memo, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import SearchInput from '@baseUI/searchInput';
import { SearchContainer } from './style';
import * as actions from '@store/actions';

const Search = memo(({ history, getSearch, searchList }: any) => {
  const [text, setText] = useState('');

  const changeRouteToRecommend = () => {
    history.push('/recommend');
  };

  const fetchSearchData = () => {
    getSearch(text);
  };

  return (
    <SearchContainer>
      <div className='search_input_container'>
        <div className='search_input_content'>
          <SearchInput
            type='text'
            placeholder='搜车歌曲、歌手、专辑'
            text={text}
            onTextChange={setText}
            onSubmit={fetchSearchData}
          />
        </div>
        <div className='cancel' onClick={changeRouteToRecommend}>
          取消
        </div>
      </div>
    </SearchContainer>
  );
});

const mapDispatchToProps = (dispatch: any) => ({
  getSearch: (text: string) => dispatch(actions.getSearch(text))
});

export default connect(
  (state: any) => ({
    searchList: state.search
  }),
  mapDispatchToProps
)(withRouter(Search));
