const lineCrator = ({ data, height }) => ({
  credits: { enabled: false },
  chart: {
    height,
    marginTop: 20,
    spacing: [0, 0, 0, 0],
  },
  title: '',
  legend: {
    enabled: false,
  },
  plotOptions: {
    line: {
      marker: {
        fillColor: '#fff',
        lineColor: '',
        lineWidth: 2,
      },
    },
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    style: {
      fontSize: '9px',
      color: '#42526E',
    },
  },
  yAxis: {
    title: {
      text: 'Customers number',
      margin: 20,
    },
    style: {
      fontSize: '9px',
      color: '#42526E',
    },
  },
  series: data,
})

export default lineCrator
