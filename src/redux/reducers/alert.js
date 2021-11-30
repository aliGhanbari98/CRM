const initialState = {
  isOpen: false,
  text: '',
  title: '',
  mode: '',
  hasIcon: false,
}

const reducers = {
  SET_ALERT_DATA: (
    _,
    { isOpen = true, text, title, mode, hasIcon = false }
  ) => ({
    text,
    title,
    mode,
    hasIcon,
    isOpen,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
