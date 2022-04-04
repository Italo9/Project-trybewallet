import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  somatorio = () => {
    const { expenses } = this.props;
    const filtraElemento = expenses.map((element) => element);
    const somatorio = filtraElemento
      .reduce((acc, elemen) => acc + (elemen.value * (Object.values(elemen.exchangeRates)
        .find((elementoMoeda) => elemen.currency === elementoMoeda.code).ask)), 0);
    return somatorio.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <div data-testid="email-field">{email.email}</div>
        <div data-testid="total-field">
          {this.somatorio()}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
