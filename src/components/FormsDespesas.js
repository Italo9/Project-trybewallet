import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';

class FormsDespesas extends Component {
  render() {
    const { currencies } = this.props;
    // console.log(currencies);
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
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
          />
        </label>
        <Select
          dataTestid="currency-input"
          label="Moeda: "
          id="Moeda"
          name="Moeda"
          options={ currencies }
        />
        <Select
          dataTestid="method-input"
          label="Método de pagamento"
          id="Método de pagamento"
          name="MétodoPagamento"
          options={ pagamento }
        />
        <Select
          dataTestid="tag-input"
          label="Categoria"
          id="Categoria"
          name="Categoria"
          options={ categoria }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormsDespesas.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(FormsDespesas);
