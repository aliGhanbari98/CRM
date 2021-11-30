const options = {
  select: {
    Country: [
      { value: 'Iran', label: 'Iran', isDefault: true },
      { value: 'US', label: 'US' },
      { value: 'Germany', label: 'Germany' },
    ],
    City: [
      { value: 'Shiraz', label: 'Shiraz', isDefault: true },
      { value: 'Tehran', label: 'Tehran' },
      { value: 'Newyork', label: 'Newyork' },
      { value: 'Essen', label: 'Essen' },
      { value: 'Dubai', label: 'Dubai' },
    ],
    Industry: [
      { label: 'industry1', value: 'industry2', isDefault: true },
      { label: 'industry1', value: 'industry2' },
      { label: 'industry1', value: 'industry2' },
      { label: 'industry1', value: 'industry2' },
    ],
    Age: [
      { label: '15', value: 15 },
      { label: '18', value: 18 },
      { label: '22', value: 22, isDefault: true },
      { label: '30', value: 30 },
    ],
    Period: [
      { label: 'Younger than', value: 'younger Than' },
      { label: 'Older than', value: 'Older Than', isDefault: true },
    ],
    CountryCodes: [
      { label: '+98', value: '+98', isDefault: true },
      { label: '+1', value: '+1' },
      { label: '+23', value: '+23' },
      { label: '+45', value: '+45' },
    ],
    Duration: [{ label: 'Total', value: 'total', isDefault: true }],
    Summary: [
      {
        isDefault: true,
        value: 'this_month',
        label: 'This Month',
      },
      {
        value: '3_month',
        label: '3 months',
      },
      {
        value: '6_month',
        label: '6 months',
      },
      {
        value: '1_year',
        label: '1 year',
      },
    ],
    InsightFunnel: [
      { value: 'SMS', label: 'SMS', isDefault: true },
      {
        value: 'Email',
        label: 'Email',
      },
    ],
  },
  checkBox: {
    Gender: ['Male', 'Female', 'Other'],
  },
}

export default options
