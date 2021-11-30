import columnOptions from '../dashboard/columnChart'

const groupColumnOptions = {
  credits: { enabled: false },
  chart: {
    type: 'column',
    height: '180px',
    marginTop: 55,
    spacing: [0, 0, 0, 0],
  },
  title: columnOptions.title,
  tooltip: columnOptions.tooltip,
  legend: {
    enabled: true,
    align: 'left',
    verticalAlign: 'top',
    itemMarginTop: 10,
  },
  plotOptions: {
    ...columnOptions.plotOptions,
    column: {
      ...columnOptions.plotOptions.column,
      pointWidth: null,
    },
  },
  xAxis: {
    type: 'category',
    categories: ['20-30', '40-50', '50-60', '60-70', '80-90', '>90'],
    labels: {
      rotation: 0,
      style: {
        fontSize: '9px',
      },
    },
  },
  yAxis: columnOptions.yAxis,
  series: [
    { name: 'Women', data: [20, 25, 40, 10, 5, 4], color: '#00875a' },
    {
      name: 'Men',
      data: [20, 30, 40, 10, 7, 3],
      color: '#5243aa',
    },
    {
      name: 'Other',
      data: [30, 40, 10, 5, 10, 20],
      color: '#00a3bf',
    },
  ],
}

export default groupColumnOptions
