const pieCreator = ({ data, height, verticalLegend }) => {
  const initialOptions = {
    credits: { enabled: false },
    chart: {
      type: 'pie',
      height,
      spacing: [0, 0, 0, 0],
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [{ data }],
  }

  if (verticalLegend)
    return {
      ...initialOptions,
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle',
        itemMarginTop: 5,
        itemMarginBottom: 5,
      },
    }

  return initialOptions
}

export default pieCreator
