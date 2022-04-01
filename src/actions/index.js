// Coloque aqui suas actions
import getSigla from '../services/SIGLASApi';

export const addUser = (value) => ({
  type: 'ADD_USER',
  value,
});

export const addWallatExpenses = (value) => ({
  type: 'ADD_WALLET_EXPENSES',
  value,
});

export const addWallatExpensesFail = (error) => ({
  type: 'ADD_WALLET_EXPENSES_FAIL',
  error,
});

export const thunkGetSigla = () => async (dispatch) => {
  try {
    const objetoMoeda = await getSigla();
    const arrayCurrencies = Object.keys(objetoMoeda);
    const arrayCurrenciesFilter = arrayCurrencies.filter((element) => element !== 'USDT');
    // console.log(arrayCurrenciesFilter);
    dispatch(addWallatExpenses(arrayCurrenciesFilter));
  } catch (error) {
    dispatch(addWallatExpensesFail(error));
  }
};
