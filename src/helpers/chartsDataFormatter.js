const funnelChart = (data) => {
  const { sent, open, delivered, click } = data
  return [
    {
      name: 'Total',
      y: sent,
      color: '#0052cc',
    },
    {
      name: 'Seen',
      y: open,
      color: '#f83057',
    },
    {
      name: 'Delivered',
      y: delivered,
      color: '#FAAEF2',
    },
    {
      name: 'Clicked',
      y: click,
      color: '#5243aa',
    },
  ]
}

const genderChart = (data) => {
  const { men, women, total } = data
  return [
    {
      name: 'Men',
      y: men,
      color: '#5243aa',
    },
    {
      name: 'Women',
      y: women,
      color: '#00875a',
    },
    {
      name: 'Other',
      y: total - men + women,
      color: '#00a3bf',
    },
  ]
}

const OSChart = (data) => {
  const { windows, linux, android, ios, mac } = data
  return [
    { name: 'Windows', y: windows, color: '#de350b' },
    { name: 'Linux', y: linux, color: '#00875a' },
    { name: 'Android', y: android, color: '#00a3bf' },
    { name: 'iOS', y: ios, color: '#ff991f' },
    { name: 'MacOS', y: mac, color: '#0052cc' },
  ]
}

const singleFigureCharts = ({ data = {}, settings = {} }) => {
  const keys = Object.keys(data)
  const result = keys.map((k) => ({
    name: settings[k].name,
    color: settings[k].color,
    y: data[k],
  }))
  return result
}

export default { singleFigureCharts, funnelChart, genderChart, OSChart }
