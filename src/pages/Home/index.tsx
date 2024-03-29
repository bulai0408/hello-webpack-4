import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { TopBar, TabBar, TabItem } from './style';

const tabConfig = [
  {
    name: '推荐',
    to: '/recommend',
    activeClassName: 'selected'
  },
  {
    name: '歌手',
    to: '/singers',
    activeClassName: 'selected'
  },
  {
    name: '排行榜',
    to: '/rank',
    activeClassName: 'selected'
  }
];

const Home = memo(({ children, history }: any) => {
  const changeRouteToSearch = () => {
    history.push('/search');
  };
  return (
    <div>
      <TopBar>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>汪易云音乐</span>
        <span className='iconfont search' onClick={changeRouteToSearch}>
          &#xe62b;
        </span>
      </TopBar>
      <TabBar>
        {tabConfig.map(i => (
          <NavLink key={i.name} to={i.to} activeClassName={i.activeClassName}>
            <TabItem>
              <span>{i.name}</span>
            </TabItem>
          </NavLink>
        ))}
      </TabBar>
      {children}
    </div>
  );
});

export default withRouter(Home);
