import { ForgotForm, LoginForm, AuthForm } from './components'

const routes = [
  {
    props: {},
    path: '/',
    name: 'login',
    Component: LoginForm,
  },
  {
    props: {},
    path: 'auth',
    name: 'auth',
    Component: AuthForm,
  },
  {
    props: {},
    path: 'forgot',
    name: 'forgot',
    Component: ForgotForm,
  },
  {
    props: { forgot: true },
    path: 'set-new-password',
    name: 'setNewPassword',
    Component: AuthForm,
  },
  {
    props: { logingInByNewPassword: true },
    path: 'login-new-password',
    name: 'loginNewPassword',
    Component: ForgotForm,
  },
]

export default routes
