import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeWallatExpenses } from '../actions/index';

class TabelaDespesas extends Component {
  handleClick = (event) => {
    const { value } = this.props;
    // console.log(event.target.name);
    const { expenses } = this.props;
    // console.log(expenses);
    const teste = expenses
      .reduce((acc, elemento) => {
        acc[elemento.id] = (elemento.id === event.target.name) ? '' : elemento;
        return acc[elemento.id];
      },
      {});
    // console.log(teste);
    value(teste);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>

        {expenses.map((elemento) => (
          <tr key={ elemento.id }>
            <td>{elemento.description}</td>
            <td>{elemento.tag}</td>
            <td>{elemento.method}</td>
            <td>{parseFloat(elemento.value).toFixed(2)}</td>
            <td>
              {Object.values(elemento.exchangeRates)
                .find((elementoMoeda) => elemento.currency === elementoMoeda.code).name}

            </td>
            <td>
              {parseFloat(Object.values(elemento.exchangeRates)
                .find((elementoMoeda) => elemento.currency === elementoMoeda.code).ask)
                .toFixed(2)}

            </td>
            <td>
              {(elemento.value * (Object.values(elemento.exchangeRates)
                .find((elementoMoeda) => elemento.currency === elementoMoeda.code)
                .ask)).toFixed(2)}

            </td>
            <td>Real</td>
            <td>
              <button
                name={ elemento.id }
                type="button"
                data-testid="delete-btn"
                onClick={ this.handleClick }
              >
                Excluir

              </button>
            </td>
          </tr>
        ))}

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  value: (valor) => dispatch(removeWallatExpenses(valor)),
});

TabelaDespesas.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TabelaDespesas);
