import swal from 'sweetalert'

const alert = ({ title, text, iconType }) => {
  if (title) {
    if (iconType) {
      swal(title, text, iconType)
    } else {
      swal(title, text)
    }
  } else {
    swal(text)
  }
}

export default alert
