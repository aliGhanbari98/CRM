const initialState = {
  items: [],
  single: {},
  compared: [],
}

const reducers = {
  SET_CAMPAIGNS_DATA: (state, { data, key }) => ({
    ...state,
    [key]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
