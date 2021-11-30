const initialState = {
  summery: {},
  gender: {},
  ageAndGender: {},
  trends: {},
  os: {},
  funnel: {},
}

const reducers = {
  SET_CAMPAIGNS_INSIGHT_CARD_DATA: (state, { data, cardType }) => ({
    ...state,
    [cardType]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
