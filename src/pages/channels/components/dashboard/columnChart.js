const options = {
  credits: { enabled: false },
  chart: {
    type: 'column',
    height: '300px',
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
      data: [
        {
          name: 'Email',
          y: 75,
          color: '#de350b',
        },
        {
          name: 'SMS',
          y: 83,
          color: '#00875a',
        },
      ],
    },
  ],
}

export default options
