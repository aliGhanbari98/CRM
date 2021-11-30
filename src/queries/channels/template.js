import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchSetTemplatesItems } from 'redux/action-creators/channels'
// helpers
import reqWrapper from 'helpers/request'
// configs
import configs from '../../configs/global'

export const getTemplatesReq = reqWrapper(({ channelType }, token) =>
  axios
    .get(`${configs.API}/v1/channels/templates`, {
      params: {
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data: { template_list } }) =>
      dispatchSetTemplatesItems(template_list)
    )
)

const createTemplateReq = reqWrapper(
  (
    { name, title, source, channelType, rendered, templateId, settings },
    token
  ) =>
    axios
      .post(
        `${configs.API}/v1/channels/templates`,
        {
          name,
          title,
          source,
          channel_type: channelType,
          rendered,
          template_id: templateId,
          settings,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(({ data }) => {
        console.log(data)
      })
)

const deleteTemplateReq = reqWrapper(({ templateId }, token) =>
  axios
    .delete(`${configs.API}/v1/channels/templates/${templateId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => {
      console.log(data)
    })
)

export const updateTemplateReq = reqWrapper(
  (
    { name, title, source, channelType, rendered, templateId, settings },
    token
  ) =>
    axios
      .patch(
        `${configs.API}/v1/channels/templates/${templateId}`,
        {
          name,
          title,
          source,
          channel_type: channelType,
          rendered,
          template_id: templateId,
          settings,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((data) => data)
)

const testTemplateReq = reqWrapper(({ templateId, contact }, token) =>
  axios
    .post(
      `${configs.API}/v1/channels/templates/${templateId}/test`,
      {
        contact,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {
      console.log(data)
    })
)

export default {
  getTemplatesReq,
  updateTemplateReq,
  createTemplateReq,
  deleteTemplateReq,
  testTemplateReq,
}
