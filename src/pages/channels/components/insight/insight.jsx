// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// queries
import { CampaignInsightQueries, ChannelInsightQueries } from 'queries'
// components
import { Card, Tabs, TableHits } from 'base/ui'
import { Select } from 'base/inputs'
// helpers
import inputsOption from 'helpers/InputsOptions'
import { FunnelCreator, GroupColumnsCreator } from 'helpers/charts'
import chartsDataFormatter from 'helpers/chartsDataFormatter'
// chart
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import tableHits from './tableHits'
// style
import styles from './insight.module.scss'

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

const funnelDataMap = {
  this_month: thisMonthData,
  '3_month': threeMonthData,
  '6_month': sixMonthData,
  '1_year': oneYearData,
}

const groupColumnChartData = [
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

const InfoCard = ({ items, header, hasIndex }) => (
  <div>
    {header && (
      <header>
        <span>{header.leftCol}</span>
        <span>{header.rightCol}</span>
      </header>
    )}
    {items.map((item, index) => (
      <div key={index} className={styles.items}>
        <span className={styles.name}>
          {`${hasIndex ? index + 1 : ''}
          ${hasIndex ? '.' : ''}${item.name}`}
        </span>
        <span className={styles.percent}>{`${item.value}%`}</span>
      </div>
    ))}
  </div>
)

const channelTypeMap = {
  email: 'Email',
  sms: 'SMS',
}

const Insight = ({ channelType, data }) => {
  const { overview, topCampaignsCR, ageAndGender, trends, funnel } = data

  const [activeTab, setActiveTab] = useState({ index: 0 })
  const [funnelAction, setFunnelAction] = useState('this_month')

  useEffect(() => {
    ChannelInsightQueries.getOverviewReq({ channelType })
    ChannelInsightQueries.getTopCampaignsCRReq({ channelType })
    ChannelInsightQueries.getAgeAndGendersReq({ channelType })
    ChannelInsightQueries.getTrendsReq({ channelType })
    ChannelInsightQueries.getFunnelReq({ channelType })
  }, [channelType])

  if (
    typeof overview.total_campaigns !== 'number' ||
    typeof funnel.sent !== 'number'
  )
    return null

  return (
    <div className={styles.insight}>
      <div className={styles.row}>
        <div className={styles.infoCards}>
          <Card className={styles.top} title="Overview">
            <InfoCard
              items={[
                { name: 'Total Campaigns', value: overview.total_campaigns },
                {
                  name: 'Reachablity',
                  value: overview.reachable,
                },
                {
                  name: 'Conversion rate',
                  value:
                    (overview.click / overview.sent) *
                    overview.total_customers *
                    100,
                },
              ]}
            />
          </Card>
          <Card className={styles.top} title="Top Campaigns CR">
            <InfoCard
              items={topCampaignsCR.map(({ name, sent, click }) => ({
                name,
                value: (click / sent) * 100,
              }))}
              hasIndex
              header={{ leftCol: 'Name', rightCol: 'Convertion rate' }}
            />
          </Card>
        </div>
        <div>
          <Card title="Age and Gender Segmentation">
            <HighchartsReact
              highcharts={Highcharts}
              options={GroupColumnsCreator({
                data: ageAndGender,
                height: 180,
              })}
            />
          </Card>
        </div>
      </div>
      <div className={styles.row}>
        <Card title="Trends by Day and Time">
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={[
              {
                title: 'Delivered(Seen)',
                onClick: () =>
                  CampaignInsightQueries.getTrendsReq({ channelType }),
              },
              {
                title: 'Clicked',
                onClick: () =>
                  CampaignInsightQueries.getTrendsReq({
                    channelType,
                    statusFilter: 'click',
                  }),
              },
            ]}
            small
          />
          <TableHits rows={tableHits.seen} />
        </Card>

        <Card
          title={`${channelTypeMap[channelType]} Funnel`}
          className={styles.funnelCard}
          action={
            <Select
              className={styles.funnelSelect}
              options={inputsOption.select.Summary}
              onChange={(value) => {
                ChannelInsightQueries.getFunnelReq({
                  channelType,
                  period: value,
                })
                setFunnelAction(value)
              }}
            />
          }
        >
          <HighchartsReact
            highcharts={Highcharts}
            // options={FunnelCreator(funnelDataMap[funnelAction])}
            options={FunnelCreator(chartsDataFormatter.funnelChart(funnel))}
          />
          <div className={styles.extraRates}>
            <div>
              <span>{funnel.unsubscribe}</span>
              <span>Unsubscribed</span>
            </div>
            <div>
              <span>{funnel.bounce}</span>
              <span>Bounce</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.main.channelsInsight,
})

export default connect(mapStateToProps, null)(Insight)
