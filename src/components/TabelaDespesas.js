import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TabelaDespesas extends Component {
  render() {
    const { expenses } = this.props;
    // console.log(expenses);
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
          </tr>
        ))}

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TabelaDespesas.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(TabelaDespesas);
