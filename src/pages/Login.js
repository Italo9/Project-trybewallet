import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailUser: '',
      password: '',
      isDesabeledButton: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { password, emailUser } = this.state;
      const seis = 6;
      // peguei no site:https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
      const validacaoEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emailUser);
      if (password.length >= seis && validacaoEmail === true) {
        this.setState({ isDesabeledButton: false });
      } else {
        this.setState({ isDesabeledButton: true });
      }
    });
  }

  handleClick = () => {
    const { email, history } = this.props;
    const { emailUser } = this.state;
    console.log(emailUser);
    email(emailUser);
    history.push('/carteira');
  }

  render() {
    const {
      isDesabeledButton,
    } = this.state;
    return (
      <div className="Login">
        <h2>Login</h2>
        <section>
          <input
            type="text"
            name="emailUser"
            onChange={ this.handleChange }
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            onChange={ this.handleChange }
            placeholder="Senha"
            data-testid="password-input"
          />
        </section>
        <button
          disabled={ isDesabeledButton }
          type="button"
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  email: (emailUser) => dispatch(addUser(emailUser)),
});

export default connect(null, mapDispatchToProps)(Login);
