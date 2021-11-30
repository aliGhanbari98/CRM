// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
// components
import { Card, DataTable, BreadCrumbs } from 'base/ui'
import { Select } from 'base/inputs'
// helpers
import tableHeaders from 'helpers/table_headers'
import inputsOption from 'helpers/InputsOptions'
import {
  FunnelCreator,
  PieCreator,
  LineCreator,
  GroupColumnsCreator,
} from 'helpers/charts'
// chart
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// style
import styles from './dashboard.module.scss'

const thisMonthData = [
  {
    name: 'Total',
    y: 1900,
    color: '#0052cc',
  },
  {
    name: 'Seen',
    y: 1843,
    color: '#f83057',
  },
  {
    name: 'Delivered',
    y: 1843,
    color: '#FAAEF2',
  },
  {
    name: 'Clicked',
    y: 1090,
    color: '#5243aa',
  },
]

const threeMonthData = [
  {
    name: 'Total',
    y: 1200,
    color: '#0052cc',
  },
  {
    name: 'Seen',
    y: 1043,
    color: '#f83057',
  },
  {
    name: 'Delivered',
    y: 1543,
    color: '#FAAEF2',
  },
  {
    name: 'Clicked',
    y: 1490,
    color: '#5243aa',
  },
]

const oneYearData = [
  {
    name: 'Total',
    y: 7000,
    color: '#0052cc',
  },
  {
    name: 'Seen',
    y: 5503,
    color: '#f83057',
  },
  {
    name: 'Delivered',
    y: 2443,
    color: '#FAAEF2',
  },
  {
    name: 'Clicked',
    y: 3490,
    color: '#5243aa',
  },
]

const sixMonthData = [
  {
    name: 'Total',
    y: 2500,
    color: '#0052cc',
  },
  {
    name: 'Seen',
    y: 1843,
    color: '#f83057',
  },
  {
    name: 'Delivered',
    y: 1133,
    color: '#FAAEF2',
  },
  {
    name: 'Clicked',
    y: 600,
    color: '#5243aa',
  },
]

const customerByGender = [
  {
    name: 'Men',
    y: 45,
    color: '#5243aa',
  },
  {
    name: 'Women',
    y: 51,
    color: '#00875a',
  },
  {
    name: 'Other',
    y: 8,
    color: '#00a3bf',
  },
]

const customerByAge = [
  {
    name: '>20',
    y: 45,
    color: '#FF991F',
  },
  {
    name: '20-40',
    y: 51,
    color: '#DE350B',
  },
  {
    name: '40-60',
    y: 8,
    color: '#36B37E',
  },
  {
    name: '60<',
    y: 8,
    color: '#0052CC',
  },
]

const lineChartData = [
  {
    name: 'Customers',
    data: [0, 1100, 800, 1800, 2700, 1300, 2200, 3200, 3000, 3100, 3300, 3950],
  },
]

const groupColumnData = [
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
]

const topRows = [
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'Mother day' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'Father day' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Coming',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'Acount' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Coming',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'Father day' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Coming',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'Email' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
  [
    { name: 'HBD' },
    { name: '1998/09/23' },
    { name: 'SMS' },
    { name: '50%' },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ],
]

const bottomRows = [
  [{ name: 'Email' }, { name: '35%' }, { name: '50%' }, { name: '15%' }],
  [{ name: 'SMS' }, { name: '39%' }, { name: '24%' }, { name: '18%' }],
]

const funnelDataMap = {
  this_month: thisMonthData,
  '3_month': threeMonthData,
  '6_month': sixMonthData,
  '1_year': oneYearData,
}

const Dashboard = () => {
  const [funnelAction, setFunnelAction] = useState('this_month')

  return (
    <main className={styles.dashboard}>
      <BreadCrumbs defaultSelectedBC="Dashboard" />
      <section>
        <div className={styles.row}>
          <Card title="Campaigns" className={styles.table} size="small">
            <DataTable
              rows={topRows}
              headers={tableHeaders.dashboardTopCampaigns}
              action={false}
              rowsPerPage={8}
            />
          </Card>
          <div className={styles.column}>
            <Card
              title="Customers increase"
              className={styles.card}
              size="small"
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={LineCreator({ data: lineChartData, height: 200 })}
              />
            </Card>
            <Card title="Campaigns" className={styles.card} size="small">
              <HighchartsReact
                highcharts={Highcharts}
                options={GroupColumnsCreator({
                  data: groupColumnData,
                  height: 180,
                })}
              />
            </Card>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.row} ${styles.innerRow}`}>
              <Card
                title="Customers segment by gender"
                className={styles.card}
                size="small"
              >
                <HighchartsReact
                  highcharts={Highcharts}
                  options={PieCreator({
                    data: customerByGender,
                    height: 140,
                    verticalLegend: true,
                  })}
                />
              </Card>
              <Card
                title="Customers segment by age"
                className={styles.card}
                size="small"
              >
                <HighchartsReact
                  highcharts={Highcharts}
                  options={PieCreator({
                    data: customerByAge,
                    height: 140,
                    verticalLegend: true,
                  })}
                />
              </Card>
            </div>
            <Card title="Campaigns" className={styles.table} size="small">
              <DataTable
                rows={bottomRows}
                action={false}
                headers={tableHeaders.dashboardBottomCampaigns}
                rowsPerPage={2}
              />
            </Card>
          </div>
          <Card
            title="Funnel customer"
            className={`${styles.card} ${styles.funnelCard}`}
            size="small"
            action={
              <Select
                className={styles.funnelSelect}
                options={inputsOption.select.Summary}
                onChange={(value) => setFunnelAction(value)}
              />
            }
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={FunnelCreator(funnelDataMap[funnelAction])}
            />
            <div className={styles.extraRates}>
              <div>
                <span>90</span>
                <span>Unsubscribed</span>
              </div>
              <div>
                <span>30</span>
                <span>Bounce</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
