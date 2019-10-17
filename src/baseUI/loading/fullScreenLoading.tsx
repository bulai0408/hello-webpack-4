import React, { FC } from 'react';
import { connect } from 'react-redux';

import { changeLoading } from '@store/actions';
import { FullLoadingContainer } from './style';

interface IProps {
  isLoading: boolean;
  changeLoading: (bool: boolean) => void;
}

const Loading: FC<IProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <FullLoadingContainer>
      <div className='spinner'>
        <div className='bounce1' />
        <div className='bounce2' />
        <div className='bounce3' />
      </div>
      {children}
    </FullLoadingContainer>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  isLoading: state.loading.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLoading(isLoading: boolean) {
    dispatch(changeLoading(isLoading));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
