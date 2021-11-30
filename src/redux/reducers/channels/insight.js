const initialState = {
  overview: {},
  topCampaignsCR: [],
  ageAndGender: [],
  trends: {},
  funnel: [],
}

const reducers = {
  SET_CHANNELS_INSIGHT_CARD_DATA: (state, { data, cardType }) => ({
    ...state,
    [cardType]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
