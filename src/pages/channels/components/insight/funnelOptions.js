import columnOptions from '../dashboard/columnChart'

const funnelOptions = {
  credits: { enabled: false },
  chart: {
    type: 'funnel',
    spacingLeft: 0,
    spacingRight: 0,
  },
  title: columnOptions.title,
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
    categories: ['All', 'Seen (Delivered)', 'Clicked'],
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
  series: [
    {
      data: [
        {
          name: 'Total',
          y: 1900,
          color: '#0052cc',
        },
        {
          name: 'Seen (Delievered)',
          y: 1843,
          color: '#f83057',
        },
        {
          name: 'Clicked',
          y: 1090,
          color: '#5243aa',
        },
        {
          name: 'Unsubscribed',
          y: 1843,
          color: '#FAAEF2',
        },
        {
          name: 'Bouncee',
          y: 1090,
          color: '#0A446E',
        },
      ],
    },
  ],
}

export default funnelOptions
