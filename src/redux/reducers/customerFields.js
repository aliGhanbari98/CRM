const initialState = [
  {
    _id: '5fb8e47092add608def8fdc1',
    label: 'First Name',
    is_enabled: true,
    datatype: 'str',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
  {
    _id: '5fb8e47092add608def8fdc2',
    label: 'Last Name',
    is_enabled: true,
    datatype: 'str',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
  {
    _id: '5fb8e47092add608def8fdc3',
    label: 'Date of birth',
    is_enabled: true,
    datatype: 'date',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
  {
    _id: '5fb8e47092add608def8fdc4',
    label: 'Gender',
    is_enabled: true,
    datatype: 'radio',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
  {
    _id: '5fb8e47092add608def8fdc5',
    label: 'Email',
    is_enabled: true,
    datatype: 'email',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
  {
    _id: '5fb8e47092add608def8fdc6',
    label: 'Mobile Number',
    is_enabled: true,
    datatype: 'number',
    operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
  },
]

const reducers = {
  SET_CUSTOMERS_FIELDS: (_, fields) => fields || [],
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
