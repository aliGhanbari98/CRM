const initialState = { label: 'Dashboard' }

const reducers = {
  SET_SELECTED_PAGE: (_, label) => ({ label }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
