const groupColumnsCreator = ({ data, height }) => ({
  credits: { enabled: false },
  chart: {
    type: 'column',
    height,
    marginTop: 55,
    spacing: [0, 0, 0, 0],
  },
  title: {
    text: '',
  },
  tooltip: {
    formatter() {
      return `${this.y}%`
    },
  },
  legend: {
    enabled: true,
    align: 'left',
    verticalAlign: 'top',
    itemMarginTop: 10,
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: false,
      },
    },
    column: {
      column: {
        borderRadius: 5,
        pointWidth: 40,
        label: {
          enabled: false,
        },
      },
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
  yAxis: {
    max: 100,
    tickInterval: 20,
    labels: { format: '{value}%' },
    title: {
      text: '',
    },
  },
  series: data,
})

export default groupColumnsCreator
