const initialState = {
  summary: {},
  overview: {},
  reachability: {},
  convertionRate: {},
}

const reducers = {
  SET_CHANNELS_DASHBOARD_CARD_DATA: (state, { data, cardType }) => ({
    ...state,
    [cardType]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
