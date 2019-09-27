import React, { FC } from 'react';
import { connect } from 'react-redux';

import { changeLoading } from '@store/actions';
import { LoadingContainer } from './style';

interface IProps {
  isLoading: boolean;
  changeLoading: (bool: boolean) => void;
}

const Loading: FC<IProps> = ({ isLoading }) => {
  return isLoading ? <LoadingContainer>拼命加载中...</LoadingContainer> : null;
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
