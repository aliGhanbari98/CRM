const periodsMap = {
  this_month: 1,
  '3_month': 3,
  '6_month': 6,
  '1_year': 12,
}

const converter = (period) => {
  const currentDate = new Date()
  const previousDate = new Date()
  previousDate.setMonth(currentDate.getMonth() - periodsMap[period])
  return { from: previousDate, to: currentDate }
}

export default converter
