const columnCrator = ({ data, height }) => ({
  credits: { enabled: false },
  chart: {
    type: 'column',
    height,
    marginTop: 20,
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
    enabled: false,
  },
  plotOptions: {
    column: {
      borderRadius: 5,
      pointWidth: 40,
      label: {
        enabled: false,
      },
    },
    series: {
      dataLabels: {
        enabled: false,
      },
    },
  },
  xAxis: {
    type: 'category',
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
  series: [
    {
      data,
    },
  ],
})

export default columnCrator
