const HOST = window.location.hostname
let configs = {}

const CL = (txt, color) =>
  console.log(`%c ${txt}`, `color: ${color};font-size: 20px;`)

/*
 * API: 	API Base URL
 * IS_PRODUCTION: Boolean of is production mode
 * DEFAULT_LANGUAGE: Set default language [FA or EN]
 *
 *
 *
 *
 * */

if (HOST === '' || process.env.NODE_ENV === 'production') {
  CL('PRODUCTION', 'red')
  configs = {
    API: '',
    IS_PRODUCTION: true,
    DEFAULT_LANGUAGE: 'EN',
  }
} else {
  CL('DEVELOPMENT', 'blue')
  configs = {
    API: 'http://dev.calistu.com:8022/api',
    IS_PRODUCTION: false,
    DEFAULT_LANGUAGE: 'EN',
  }
}

const conf = configs

export default conf
