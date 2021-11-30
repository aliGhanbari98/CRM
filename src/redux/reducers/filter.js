const initialState = {
  'First Name': { key: 'First Name', value: '', selected: false },
  'Last Name': { key: 'Last Name', value: '', selected: false },
  Gender: { key: 'Gender', value: '', selected: false },
  'Date Of Birth': { key: 'Date Of Birth', value: '', selected: false },
  Age: { key: 'Age', value: '', selected: false },
  Period: { key: 'Period', value: 'Older Than', selected: false },
}

const reducers = {
  SET_FILTER_DATA: (state, { key, value }) => ({
    ...state,
    [key]: { ...state[key], value },
  }),
  SET_FILTER_SELECTED: (state, { key, selected }) => ({
    ...state,
    [key]: { ...state[key], selected },
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
