import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <div data-testid="email-field">{email.email}</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
