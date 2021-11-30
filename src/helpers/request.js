import axios from 'axios'
import { dispatchSetAlertData } from 'redux/action-creators/alert'
import configs from '../configs/global'

const reqWrapper = (req) => (...args) =>
  req(...args, `Bearer ${localStorage.getItem('access_token')}`)
    .then((data) => data)
    .catch((err) => {
      console.log(err.response.data)
      dispatchSetAlertData({
        text: 'Something went wrong',
        title: 'Error',
        mode: 'danger',
      })
      // if (!err.response) {
      //   dispatchSetAlertData({
      //     text: 'Not Allowed (405)',
      //     title: 'Error',
      //     mode: 'danger',
      //   })
      //   return
      // }
      if (err.response.status === 404) {
        console.log('asdf')
      } else {
        console.log(err)
        throw err
      }
    })

// const refreshReq = () => {
//   axios
//     .post(
//       `${configs.API}/auth/refresh`,
//       {
//         refresh_token: localStorage.getItem('refreshToken'),
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       }
//     )
//     .then(({ refreshToken, accessToken }) => {
//       localStorage.setItem('refreshToken', refreshToken)
//       localStorage.setItem('accessToken', accessToken)
//     })
//     .catch((err) => {
//       if (err.response.status === 401) {
//         dispatchSetAlertData({
//           text: '2452 customers added successfully !',
//           title: 'Message',
//           mode: 'success',
//         })
//         localStorage.clear()
//         window.location.reload()
//       }
//     })
// }

export default reqWrapper
