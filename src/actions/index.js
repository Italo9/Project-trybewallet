// Coloque aqui suas actions
import getSigla from '../services/SIGLASApi';

export const addUser = (value) => ({
  type: 'ADD_USER',
  value,
});

export const addWallatCurrencies = (value) => ({
  type: 'ADD_WALLET_CURRENCIES',
  value,
});

export const addWallatCurrenciesFail = (error) => ({
  type: 'ADD_WALLET_CURRENCIES_FAIL',
  error,
});

export const addWallatExpenses = (value) => ({
  type: 'ADD_WALLET_EXPENSES',
  value,
});

export const addWallatExpensesFail = (value) => ({
  type: 'ADD_WALLET_EXPENSES_FAIL',
  value,
});

export const thunkGetSigla = () => async (dispatch) => {
  try {
    const objetoMoeda = await getSigla();
    // console.log(objetoMoeda);
    const arrayCurrencies = Object.keys(objetoMoeda);
    const arrayCurrenciesFilter = arrayCurrencies.filter((element) => element !== 'USDT');
    // console.log(arrayCurrenciesFilter);
    dispatch(addWallatCurrencies(arrayCurrenciesFilter));
  } catch (error) {
    dispatch(addWallatExpensesFail(error));
  }
};

export const thunkGetGastos = (state) => async (dispatch) => {
  try {
    const objetoState = state;
    const objetoMoeda = await getSigla();
    delete objetoMoeda.USDT;
    objetoState.exchangeRates = objetoMoeda;
    // console.log(objetoState);
    dispatch(addWallatExpenses(objetoState));
  } catch (error) {
    dispatch(addWallatCurrenciesFail(error));
  }
};
