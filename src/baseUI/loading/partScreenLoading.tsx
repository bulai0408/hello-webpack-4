import React, { FC } from 'react';
import { connect } from 'react-redux';

import { changeLoading } from '@store/actions';
import { PartLoadingContainer } from './style';

interface IProps {
  isLoading: boolean;
  changeLoading: (bool: boolean) => void;
}

const Loading: FC<IProps> = ({ isLoading }) => {
  return isLoading ? (
    <PartLoadingContainer>
      <div className='spinner'>
        <div className='rect1' />
        <div className='rect2' />
        <div className='rect3' />
        <div className='rect4' />
        <div className='rect5' />
      </div>
    </PartLoadingContainer>
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
