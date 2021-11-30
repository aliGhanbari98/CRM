const initialState = []

const reducers = {
  SET_TEMPLATE_ITEMS: (_, items) => items,
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
