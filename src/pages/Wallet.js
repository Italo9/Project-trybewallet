import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkGetSigla } from '../actions';
import Header from '../components/Header';
import FormsDespesas from '../components/FormsDespesas';
import TabelaDespesas from '../components/TabelaDespesas';

class Wallet extends React.Component {
  componentDidMount() {
    const { getSiglas } = this.props;
    getSiglas();
  }

  render() {
    return (
      <div>
        <Header />
        <FormsDespesas />
        <TabelaDespesas />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSiglas: () => dispatch(thunkGetSigla()),
});

Wallet.propTypes = {
  getSiglas: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
