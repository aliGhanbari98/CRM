// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// queries
import { ChannelDashboardQueries } from 'queries'
// components
import { Card, DataTable } from 'base/ui'
import { Select } from 'base/inputs'
import { Button } from 'base/buttons'
// helpers
import tableHeaders from 'helpers/table_headers'
import inputsOption from 'helpers/InputsOptions'
import { ColumnCreator } from 'helpers/charts'
import chartsDataFormatter from 'helpers/chartsDataFormatter'
// chart
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// style
import styles from './dashboard.module.scss'

const reachabilityData = {
  thisMonth: [
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
  threeMonths: [
    {
      name: 'Email',
      y: 28,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 49,
      color: '#00875a',
    },
  ],
  sixMonths: [
    {
      name: 'Email',
      y: 99,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 48,
      color: '#00875a',
    },
  ],
  oneYear: [
    {
      name: 'Email',
      y: 35,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 75,
      color: '#00875a',
    },
  ],
}

const reachabtilityDataMap = {
  this_month: reachabilityData.thisMonth,
  '3_month': reachabilityData.threeMonths,
  '6_month': reachabilityData.sixMonths,
  '1_year': reachabilityData.oneYear,
}

const ConversionData = {
  thisMonth: [
    {
      name: 'Email',
      y: 12,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 47,
      color: '#00875a',
    },
  ],
  threeMonths: [
    {
      name: 'Email',
      y: 49,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 24,
      color: '#00875a',
    },
  ],
  sixMonths: [
    {
      name: 'Email',
      y: 120,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 43,
      color: '#00875a',
    },
  ],
  oneYear: [
    {
      name: 'Email',
      y: 200,
      color: '#de350b',
    },
    {
      name: 'SMS',
      y: 140,
      color: '#00875a',
    },
  ],
}

const convertionDataMap = {
  this_month: ConversionData.thisMonth,
  '3_month': ConversionData.threeMonths,
  '6_month': ConversionData.sixMonths,
  '1_year': ConversionData.oneYear,
}

const overviewTableDataFormatter = (data) => {
  const { email, sms } = data
  const rows = [
    [
      { name: 'Email' },
      { name: email.sent },
      { name: email.open },
      { name: email.click },
      { name: email.bounce },
      { name: email.unsubscribe },
    ],
    [
      { name: 'SMS' },
      { name: sms.sent },
      { name: sms.open },
      { name: sms.click },
      { name: sms.bounce },
      { name: sms.unsubscribe },
    ],
  ]
  return rows
}

const rows = [
  [
    { name: 'Email' },
    { name: '125' },
    { name: '8500' },
    { name: '1500' },
    { name: '85' },
    { name: '15' },
  ],
  [
    { name: 'SMS' },
    { name: '10400' },
    { name: '2500' },
    { name: '1500' },
    { name: '85' },
    { name: '15' },
  ],
]

const columnChartsSettings = {
  email: {
    name: 'Email',
    color: '#de350b',
  },
  sms: {
    name: 'SMS',
    color: '#00875a',
  },
}

const InfoBox = ({ desc, number }) => (
  <div className={styles.infoBox}>
    <span className={styles.number}>{number}</span>
    <span className={styles.desc}>{desc}</span>
  </div>
)

const NumbersCard = ({ button, campaignNumber, templatesNumber }) => (
  <div className={styles.numbersCard}>
    <div className={styles.insight}>
      <Button appearance="link" onClick={button.onClick} label={button.label} />
    </div>
    <div className={styles.numbers}>
      <InfoBox desc="Campaigns on this channel" number={campaignNumber} />
      <InfoBox desc="Templates on this channel" number={templatesNumber} />
    </div>
  </div>
)

const Dashboard = ({ data }) => {
  const { summary, overview, reachability, convertionRate } = data

  const [channelReachabilityAction, setChannelReachabilityAction] = useState(
    'this_month'
  )
  const [channelConversionAction, setChannelConversionAction] = useState(
    'this_month'
  )

  useEffect(() => {
    ChannelDashboardQueries.getSummaryReq()
    ChannelDashboardQueries.getOverviewReq()
    ChannelDashboardQueries.getReachabilityReq('')
    ChannelDashboardQueries.getConvertionRate('')
  }, [])

  if (!summary.email) return null

  return (
    <div className={styles.dashboard}>
      <div className={styles.row}>
        <Card title="Email">
          <NumbersCard
            button={{
              onClick: () => navigate('/channels/email/insight'),
              label: 'Email insight',
            }}
            campaignNumber={summary.email.total_campaigns}
            templatesNumber={summary.email.total_templates}
          />
        </Card>
        <Card title="SMS">
          <NumbersCard
            button={{
              onClick: () => navigate('/channels/SMS/insight'),
              label: 'SMS insight',
            }}
            campaignNumber={summary.sms.total_campaigns}
            templatesNumber={summary.sms.total_templates}
          />
        </Card>
      </div>
      <Card title="Channles overview" className={styles.channelsOverview}>
        <DataTable
          headers={tableHeaders.channelsOverview}
          // rows={overviewTableDataFormatter(overview)}
          rows={rows}
          action={false}
          pagination={false}
        />
      </Card>
      <div className={styles.row}>
        <Card
          title="Channel reachability"
          action={
            <Select
              className={styles.summerySelect}
              options={inputsOption.select.Summary}
              onChange={(value) => {
                ChannelDashboardQueries.getReachabilityReq(value)
                setChannelReachabilityAction(value)
              }}
            />
          }
        >
          <HighchartsReact
            highcharts={Highcharts}
            options={ColumnCreator({
              // data: reachabtilityDataMap[channelReachabilityAction],
              data: chartsDataFormatter.singleFigureCharts({
                settings: columnChartsSettings,
                reachability,
              }),
              height: 300,
            })}
          />
        </Card>
        <Card
          title="Channels convertion rate"
          action={
            <Select
              className={styles.summerySelect}
              options={inputsOption.select.Summary}
              onChange={(value) => {
                ChannelDashboardQueries.getConvertionRate(value)
                setChannelConversionAction(value)
              }}
            />
          }
        >
          <HighchartsReact
            highcharts={Highcharts}
            options={ColumnCreator({
              // data: convertionDataMap[channelConversionAction],
              data: chartsDataFormatter.singleFigureCharts({
                settings: columnChartsSettings,
                convertionRate,
              }),
              height: 300,
            })}
          />
        </Card>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ data: state.main.channelsDashboard })

export default connect(mapStateToProps, null)(Dashboard)
