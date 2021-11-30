const initialState = { isOpen: false }

const reducers = {
  OPEN_PROFILE_CARD: (state, isOpen) => ({ ...state, isOpen }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
