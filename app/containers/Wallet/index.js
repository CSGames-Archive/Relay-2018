import React from 'react';
import { createStructuredSelector } from 'reselect';
import { loadWallets } from './actions';
import { connect } from 'react-redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { WALLETS } from './constants';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { selectWallets, makeSelectWallets } from './selectors';
import { makeSelectLoading } from '../../asyncDisplayer/containers/IsLoading/selectors';
import { makeSelectError } from '../../asyncDisplayer/containers/HasError/selectors';
import LoadingError from '../../asyncDisplayer/components/LoadingError';

class Wallet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.wallets);

    return (
      <div>
        <button onClick={this.props.onLoadWallets}>
          load wallets
        </button>
        <LoadingError
          loading={this.props.walletsLoading}
          error={this.props.walletsError}
          errorNode={<p>error</p>}>
          <div>
            {this.props.wallets.map((wallet, index) => (
              <div key={wallet.address}>
                <h3>wallet {index}:</h3>
                <div>
                  <div><span>address: </span><span>{wallet.address}</span></div>
                  <div><span>username: </span><span>{wallet.username }</span></div>
                </div>
              </div>
            ))}
          </div>
        </LoadingError>
      </div>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  wallets: makeSelectWallets(),
  walletsLoading: makeSelectLoading(selectWallets),
  walletsError: makeSelectError(selectWallets),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadWallets: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadWallets());
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSurveyReducer = injectReducer({
  key: WALLETS,
  reducer: reducer,
});

const withSurveySaga = injectSaga({
  key: WALLETS,
  saga: saga,
});


export default compose(
  withSurveyReducer,
  withSurveySaga,
  withConnect,
)(Wallet);