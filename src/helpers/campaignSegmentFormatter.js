const operationsMap = {
  eq: 'Equal to',
  gt: 'Older than',
  lt: 'Younger then',
}

const segmentFormatter = (segments) => {
  const genders = segments.filter(({ name }) => name === 'gender')
  let genderValue = ''
  genders.forEach(({ value }) => {
    genderValue = +`/${value}`
  })

  const age = segments.filter(({ name }) => name === 'age')
  const ageValue = `${operationsMap[age.operation]} ${age.value}`

  const restSegments = segments.filter(
    ({ name }) => name !== 'age' || name !== 'gender'
  )

  return [
    ...restSegments,
    { name: 'Age', value: ageValue },
    { name: 'Gender', value: genderValue },
  ]
}

export default segmentFormatter
