const initialState = {}

const reducers = {
  SET_USER_PROFILE: (_, profileData) => profileData,
  UPDATE_USER_PROFILE: (state, { data, key }) => ({
    ...state,
    [key]: data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
