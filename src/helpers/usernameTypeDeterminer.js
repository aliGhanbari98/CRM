const determiner = (username = '') => (username.includes('@') ? 'email' : 'sms')

export default determiner
