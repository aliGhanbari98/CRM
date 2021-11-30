const initialState = { forgot: {}, login: {} }

const reducers = {
  SET_LOGIN_DATA: (state, data) => ({ ...state, login: data }),
  SET_FORGOT_DATA: (state, data) => ({ ...state, forgot: data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
