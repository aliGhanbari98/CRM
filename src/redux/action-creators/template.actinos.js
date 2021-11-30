import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setTemplateSettings = createAction('SET_TEMPLATE_SETTINGS')
export const dispatchSetTemplateSettings = (detail) =>
  dispatch(setTemplateSettings(detail))

const setSelectedElement = createAction('SET_SELECTED_ELEMENT')
export const dispatchSetSelectedElement = (selectedElement) =>
  dispatch(setSelectedElement(selectedElement))

const toggleSocialMedia = createAction('TOGGLE_SOCIAL_MEDIA')
export const dispatchToggleSocialMedia = (selectedElement) =>
  dispatch(toggleSocialMedia(selectedElement))

export default null
