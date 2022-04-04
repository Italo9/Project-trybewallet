import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import { thunkGetGastos } from '../actions/index';

class FormsDespesas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { value } = this.props;
    const { id } = this.state;
    if (id === 0) {
      this.setState({
        id: 0,
      });
    } this.setState({
      id: id + 1,
    });
    value(this.state);
    this.setState({
      value: '0',
      description: '' });
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    const pagamento = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const categoria = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    return (
      <fieldset>
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            type="text"
            id="valor"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <Select
          dataTestid="currency-input"
          label="Moeda: "
          id="Moeda"
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          dataTestid="method-input"
          label="Método de pagamento"
          id="Método de pagamento"
          name="method"
          options={ pagamento }
          onChange={ this.handleChange }
        />
        <Select
          dataTestid="tag-input"
          label="Categoria"
          id="Categoria"
          name="tag"
          options={ categoria }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  funcao: state.wallet.funcao,
});

const mapDispatchToProps = (dispatch) => ({
  value: (valor) => dispatch(thunkGetGastos(valor)),
});

FormsDespesas.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormsDespesas);
