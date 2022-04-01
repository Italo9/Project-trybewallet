// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_WALLET_EXPENSES':
    return { ...state, currencies: action.value };
  default:
    return state;
  }
}

export default wallet;
