const initialState = {
  settings: {
    background: {
      color: { rgb: {}, hex: '' },
      photoSRC: '',
      alt: 'background',
    },
    text: {
      content: `Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old.
      Richard McClintock`,
      fonts: '',
      fontSize: '',
      bold: '',
      italic: '',
      style: '',
      textAlign: 'left',
      color: { rgb: {}, hex: '' },
    },
    header: {
      content: 'This is Header',
      fonts: '',
      fontSize: '',
      bold: '',
      italic: '',
      style: '',
      textAlign: 'left',
      color: { rgb: {}, hex: '' },
    },
    picture: { color: { rgb: {}, hex: '' }, photoSRC: '', alt: 'pic' },
    button: {
      fonts: '',
      fontSize: '',
      style: '',
      color: { rgb: {}, hex: '#ed4e3b' },
      link: '',
      textColor: { rgb: {}, hex: '#fffff' },
    },
    socialMedia: [
      {
        imageSRC:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/768px-Linkedin_icon.svg.png',
        link: '',
        active: true,
      },
      {
        imageSRC:
          'https://www.flaticon.com/svg/static/icons/svg/733/733547.svg',
        link: '',
        active: true,
      },
      {
        imageSRC:
          'https://www.flaticon.com/svg/static/icons/svg/1409/1409937.svg',
        link: '',
        active: true,
      },
      {
        imageSRC:
          'https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg',
        link: '',
        active: false,
      },
    ],
  },
  selectedElement: '',
}

const settingsEditor = (settings, { field, subField, newValue }) => ({
  ...settings,
  [field]: { ...settings[field], [subField]: newValue },
})

const socialMediaToggler = (settings, { index, newValue, field }) => ({
  ...settings,
  socialMedia: settings.socialMedia.map((item, i) =>
    index === i ? { ...item, [field]: newValue } : item
  ),
})

const reducers = {
  SET_TEMPLATE_SETTINGS: (state, detail) => ({
    ...state,
    settings: settingsEditor(state.settings, detail),
  }),
  TOGGLE_SOCIAL_MEDIA: (state, { index, newValue, field }) => ({
    ...state,
    settings: socialMediaToggler(state.settings, { index, field, newValue }),
  }),

  SET_SELECTED_ELEMENT: (state, selectedElement) => ({
    ...state,
    selectedElement,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
