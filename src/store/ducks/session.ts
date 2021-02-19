// actions
const CLEAR = "session/CLEAR";
const SET = "session/SET";
const AMOUNT = "amount/SET";

interface SetSessionAction {
  type: typeof SET;
  payload: string;
}

interface ClearSessionAction {
  type: typeof CLEAR;
}

interface SetAmountAction {
  type: typeof AMOUNT;
  payload: number;
}

export interface ReduxState {
  session: string | null;
  amount: number;
}
type ActionTypes = SetSessionAction | ClearSessionAction | SetAmountAction;

const INITIAL_STATE: ReduxState = {
  session: null,
  amount: 99.99,
};

// reducer
const sessionReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case SET:
      return { ...state, session: action.payload };
    case CLEAR:
      return { ...state, session: null };
    case AMOUNT:
      return { ...state, amount: state.amount + action.payload };
  }
  return state;
};

export default sessionReducer;

// action creators
export const setSession = (payload: string): ActionTypes => {
  return { payload, type: SET };
};

export const clearSession = (): ActionTypes => {
  return { type: CLEAR };
};

export const setAmount = (num: number): ActionTypes => {
  return { type: AMOUNT, payload: num };
};
