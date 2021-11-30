const initialState = {
  summery: {},
  topCampaigns: [],
  upcomingCampaigns: [],
  runningCampaigns: [],
}

const reducers = {
  SET_CAMPAIGNS_DASHBOARD_CARD_DATA: (state, { data, cardType }) => ({
    ...state,
    [cardType]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
