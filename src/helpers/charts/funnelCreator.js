const funnelCreator = (data) => ({
  credits: { enabled: false },
  chart: {
    type: 'funnel',
    spacingLeft: 0,
    spacingRight: 0,
    width: 550,
  },
  title: {
    text: '',
  },
  tooltip: {
    formatter() {
      return `${this.key}: <b>${this.y}</b>`
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    itemMarginTop: 10,
    itemMarginBottom: 10,
    margin: 0,
    padding: 0,
    labelFormatter() {
      return `${this.name}: ${this.y}`
    },
  },
  xAxis: {
    categories: ['All', 'Seen', 'Delivered', 'Clicked'],
  },
  yAxis: {
    max: 1900,
  },
  plotOptions: {
    funnel: {
      dataLabels: {
        enabled: true,
        inside: true,
      },
      showInLegend: true,
    },
  },
  series: [{ data }],
})

export default funnelCreator
