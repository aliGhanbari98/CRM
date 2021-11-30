/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from '@reach/router'
import {
  BreadCrumbs,
  Card,
  Tabs,
  TableHits,
  Calendar,
  Modal,
  DataTable,
  CompareTable,
  TableTabs,
  Filter,
} from 'base/ui'
import { Button } from 'base/buttons'
import {
  BasicInput,
  SearchInput,
  Select,
  TextArea,
  DateInput,
} from 'base/inputs'
import TemplateItem from 'base/templateItem/templateItem'
import Highcharts from 'highcharts'
import highchartsFunnel from 'highcharts/modules/funnel'
import HighchartsReact from 'highcharts-react-official'
import CheckIcon from '@atlaskit/icon/glyph/check'
import VidPlayIcon from '@atlaskit/icon/glyph/vid-play'
import VidPauseIcon from '@atlaskit/icon/glyph/vid-pause'
import EditorTextColorIcon from '@atlaskit/icon/glyph/editor/text-color'
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right-large'
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close'
import {
  CampaignDashboardQueries,
  CamapaignQueries,
  CampaignInsightQueries,
} from 'queries'
import tableHeaders from 'helpers/table_headers'
import InputsOption from 'helpers/InputsOptions'
import {
  PieCreator,
  ColumnCreator,
  GroupColumnsCreator,
  FunnelCreator,
} from 'helpers/charts'
import chartsDataFormatter from 'helpers/chartsDataFormatter'
import tableFormatters from 'helpers/tablesDataFormatter'
import segmentDataFormatter from 'helpers/campaignSegmentFormatter'
import { CampaignSummery, ConditionSelects } from './components'
import styles from './index.module.scss'

highchartsFunnel(Highcharts)

const summaryData = {
  this_month: {
    totalCampaigns: 121,
    convertionRate: 12,
    convertionRateIncrease: 2.3,
  },
  '3_month': {
    totalCampaigns: 200,
    convertionRate: 30,
    convertionRateIncrease: 10.1,
  },
  '6_month': {
    totalCampaigns: 500,
    convertionRate: 50,
    convertionRateIncrease: 30,
  },
  '1_year': {
    totalCampaigns: 1000,
    convertionRate: 79,
    convertionRateIncrease: 60,
  },
}

const pieChartData = [
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

const columnChartData = [
  {
    name: 'Windows',
    y: 20,
    color: '#de350b',
  },
  {
    name: 'iOS',
    y: 38,
    color: '#ff991f',
  },
  {
    name: 'Linux',
    y: 20,
    color: '#00875a',
  },
  {
    name: 'Android',
    y: 20,
    color: '#00a3bf',
  },
  {
    name: 'MacOS',
    y: 25,
    color: '#0052cc',
  },
]

const groupColumnData = [
  { name: 'Women', data: [20, 25, 40, 10, 5, 4], color: '#00875a' },
  {
    name: 'Men',
    data: [20, 30, 40, 10, 7, 3],
    color: '#00a3bf',
  },
]

const sms = [
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

const email = [
  {
    name: 'Total',
    y: 1500,
    color: '#0052cc',
  },
  {
    name: 'Seen',
    y: 1243,
    color: '#f83057',
  },
  {
    name: 'Delivered',
    y: 1143,
    color: '#FAAEF2',
  },
  {
    name: 'Clicked',
    y: 900,
    color: '#5243aa',
  },
]

const funnelDataMap = {
  SMS: sms,
  Email: email,
}

const tableHits1 = [
  {
    time: '00-04',
    days: [
      [0, 15],
      [1, 6],
      [2, 1],
      [3, 7],
      [4, 1],
      [5, 10],
      [6, 11],
    ],
  },
  {
    time: '04-08',
    days: [
      [0, 6],
      [1, 7],
      [3, 14],
      [4, 11],
      [5, 6],
      [6, 8],
    ],
  },
  {
    time: '08-12',
    days: [
      [0, 1],
      [1, 14],
      [2, 3],
      [3, 16],
      [4, 11],
      [5, 7],
      [6, 4],
    ],
  },
  {
    time: '12-16',
    days: [
      [0, 1],
      [1, 6],
      [2, 10],
      [3, 11],
      [4, 10],
      [5, 1],
      [6, 6],
    ],
  },
  {
    time: '16-20',
    days: [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 10],
      [4, 10],
      [5, 6],
      [6, 1],
    ],
  },
  {
    time: '20-24',
    days: [
      [0, 10],
      [1, 6],
      [2, 6],
      [3, 10],
      [4, 11],
      [5, 7],
      [6, 1],
    ],
  },
]

const tableHits2 = [
  {
    time: '00-04',
    days: [
      [0, 10],
      [1, 2],
      [2, 10],
      [3, 15],
      [4, 2],
      [5, 15],
      [6, 5],
    ],
  },
  {
    time: '04-08',
    days: [
      [0, 1],
      [1, 7],
      [3, 10],
      [4, 8],
      [5, 10],
      [6, 8],
    ],
  },
  {
    time: '08-12',
    days: [
      [0, 6],
      [1, 1],
      [2, 10],
      [3, 1],
      [4, 15],
      [5, 10],
      [6, 1],
    ],
  },
  {
    time: '12-16',
    days: [
      [0, 10],
      [1, 1],
      [2, 14],
      [3, 8],
      [4, 10],
      [5, 5],
      [6, 6],
    ],
  },
  {
    time: '16-20',
    days: [
      [0, 12],
      [1, 10],
      [2, 1],
      [3, 6],
      [4, 10],
      [5, 6],
      [6, 8],
    ],
  },
  {
    time: '20-24',
    days: [
      [0, 15],
      [1, 1],
      [2, 8],
      [3, 5],
      [4, 2],
      [5, 16],
      [6, 15],
    ],
  },
]

const upcomingRows = [
  ...[...Array(4)].map(() => [
    { name: 'Christmas' },
    { name: '1989/12/13' },
    { name: 'action', key: 'upcoming_action', customAccessor: true },
  ]),
]

const runningCampaignsRows = [
  ...[...Array(10)].map(() => [
    {
      name: 'Christmas',
      path: '/campaigns/insight',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
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
  ]),
]

const totalCampaignsRows = [
  ...[...Array(10)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
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
  ]),
]

const totalCampaignsRows2 = [
  ...[...Array(10)].map((_, index) => [
    { id: index + 1 },
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Done',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const totalCampaignsRows3 = [
  ...[...Array(10)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
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
  ]),
]

const totalCampaignsRows4 = [
  ...[...Array(10)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Paused',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const Campaigns = ({ campaigns, dashboardData, insightData, tabs }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    CampaignDashboardQueries.getSummeryReq({ period: 'this_month' })
    CampaignDashboardQueries.getTopCampaignsReq()
    CampaignDashboardQueries.getUpcomingsCampaignsReq()
    CampaignDashboardQueries.getRunningCampaaignsReq()
    CamapaignQueries.getCampaignsByChannelReq({})
  }, [])

  let insightCampaignId = ''

  useEffect(() => {
    if (pathname.startsWith('/campaigns/insight')) {
      insightCampaignId = pathname.split('/').slice(3, 4)[0]
      CampaignInsightQueries.getSummeryReq(insightCampaignId)
      CampaignInsightQueries.getGenderReq(insightCampaignId)
      CampaignInsightQueries.getAgeAndGenderReq(insightCampaignId)
      CampaignInsightQueries.getTrendsReq({ campaignId: insightCampaignId })
      CampaignInsightQueries.getCampaignsOSReq(insightCampaignId)
      CampaignInsightQueries.getFunnelReq({
        campaignId: insightCampaignId,
        channelType: 'sms',
      })
      CamapaignQueries.getSingleCampaignReq(insightCampaignId)
    }
  }, [pathname])

  const bcItems = pathname.split('/').slice(0, 2)
  const [activeTab, setActiveTab] = useState({ index: 0 })
  const [datePicker, setDatePicker] = useState({ start: null, end: null })
  const [moreModal, setMoreModal] = useState(false)
  const [totalActiveTab, setTotalActiveTab] = useState(0)
  const [compareHeaders, setCompareHeaders] = useState([])
  const [compareRows, setCompareRows] = useState([
    {
      header: 'Total sent',
      items: [],
    },
    {
      header: 'Clicked',
      items: [],
    },
    {
      header: 'Conversion rate',
      items: [],
    },
    {
      header: 'Bounce rate',
      items: [],
    },
    {
      header: 'Unsubscribed',
      items: [],
    },
    {
      header: 'Segmentation',
      items: [],
    },
    {
      header: 'Channel',
      items: [],
    },
  ])

  const [compareModal, setCompareModal] = useState(false)
  const [compareTab, setCompareTab] = useState(0)
  const [runIsClicked, setRunIsClickes] = useState(false)
  const [funnelAction, setFunnelAction] = useState('SMS')
  const [campaignName, setCampgianName] = useState('')
  const [campaignDesc, setCampaignDesc] = useState('')
  const [selectedCampaigns, setSelectedCampaigns] = useState([])

  const handleComparingCampaigns = (id) => {
    const index = selectedCampaigns.findIndex((_id) => _id === id)
    console.log(index)
    if (index < 0) setSelectedCampaigns([...selectedCampaigns, id])
    else
      setSelectedCampaigns([
        ...selectedCampaigns.slice(index - 1, index),
        ...selectedCampaigns.slice(index + 1),
      ])
  }

  const onRunClick = () => {
    setRunIsClickes(true)
    document
      .getElementById('master-container')
      .scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddCompare = () => {
    setCompareModal(true)

    setCompareHeaders((prevState) => {
      const prev = prevState
      prev.push('Christmas', 'Christmas', 'Christmas', 'Christmas')

      setCompareRows((prevRows) => {
        const rows = prevRows
        rows.forEach((item, index) => {
          const { items } = item
          items.push('20%', '12%', '40%', '28%')

          rows[index] = { ...item, items }
        })
        return [...rows]
      })

      return [...prev]
    })
  }

  const getDate = (date) => {
    if (date) {
      const formattedDate = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }).format(date)
      return formattedDate
    }

    const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    return utc
  }

  return (
    <main className={styles.campaign}>
      <BreadCrumbs items={bcItems} tabs={tabs} />

      {pathname === '/campaigns/dashboard' && (
        <section className={styles.dashboard}>
          <div className={styles.row}>
            <Card
              title="Summery"
              action={
                <Select
                  className={styles.summerySelect}
                  options={InputsOption.select.Summary}
                  onChange={(value) => {
                    CampaignDashboardQueries.getSummeryReq({
                      period: value,
                    })
                  }}
                />
              }
              size="small"
            >
              <CampaignSummery
                totalCampaigns={dashboardData.summery.total_campaign}
                convertionRate={dashboardData.summery.conversation_rate}
              />
            </Card>

            <Card className={styles.top} title="Top Campaigns" size="small">
              <header>
                <span>Name</span>
                <span>Conversion Rate</span>
              </header>
              {dashboardData.topCampaigns.map(
                ({ campaign_name, conversation_rate }, index) => (
                  <div key={index} className={styles.items}>
                    <span className={styles.name}>
                      {`${index + 1}.${campaign_name}`}
                    </span>
                    <span className={styles.percent}>
                      {`${conversation_rate}%`}
                    </span>
                  </div>
                )
              )}
            </Card>

            <Card
              className={styles.upcoming}
              title="Upcoming Campaigns"
              size="small"
            >
              <DataTable
                headers={tableHeaders.upcomingCampaigns}
                rows={tableFormatters.campaigns.upcoming(
                  dashboardData.upcomingCampaigns
                )}
                pagination={false}
                action={false}
              />
            </Card>
          </div>

          <div className={styles.row}>
            <Card
              className={styles.running}
              title="Running Campaigns"
              description1="12 RUNNING CAMPAIGNS"
              description2="LAST UPDATE 23 NOV 2020"
            >
              <DataTable
                headers={tableHeaders.runningCampaigns}
                rows={tableFormatters.campaigns.total(
                  dashboardData.runningCampaigns
                )}
                action={false}
                rowsPerPage={11}
              />
            </Card>
          </div>
        </section>
      )}

      {pathname === '/campaigns/total' && (
        <section className={styles.total}>
          <div className={styles.details}>
            <span>211 total Supports</span>
            <span>last update 23 nov 2020</span>
          </div>

          <div className={styles.cardTabs}>
            <TableTabs
              items={[
                {
                  title: 'All campaigns',
                  onClick: () => CamapaignQueries.getCampaignsByChannelReq({}),
                },
                {
                  title: 'Done campaigns',
                  onClick: () =>
                    CamapaignQueries.getCampaignsByChannelReq({
                      status: 'stopped',
                    }),
                },
                {
                  title: 'Running campaigns',
                  onClick: () =>
                    CamapaignQueries.getCampaignsByChannelReq({
                      status: 'running',
                    }),
                },
                {
                  title: 'Paused campaigns',
                  onClick: () =>
                    CamapaignQueries.getCampaignsByChannelReq({
                      status: 'paused',
                    }),
                },
              ]}
              activeTab={totalActiveTab}
              setActiveTab={setTotalActiveTab}
            />

            <div className={styles.content}>
              <DataTable
                className={`${styles.table}`}
                headers={tableHeaders.totalCampaigns}
                rows={tableFormatters.campaigns.total(campaigns.items)}
                action={false}
              />
            </div>
          </div>
        </section>
      )}

      {pathname.startsWith('/campaigns/insight') &&
        typeof insightData.funnel.sent === 'number' && (
          <section className={styles.insight}>
            <div className={styles.row}>
              <Card
                className={styles.summary}
                title="Summary"
                size="small"
                action={
                  <div className={styles.actions}>
                    <button
                      type="button"
                      onClick={() =>
                        CamapaignQueries.startCampaignReq(insightCampaignId)
                      }
                    >
                      <VidPlayIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        CamapaignQueries.pauseCampaignReq(insightCampaignId)
                      }
                    >
                      <VidPauseIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        CamapaignQueries.stopCampaignReq(insightCampaignId)
                      }
                    >
                      <EditorTextColorIcon />
                    </button>
                  </div>
                }
              >
                <div>
                  <span>Name:</span>
                  {/* <span>{insightData.summery.name}</span> */}
                  <span>HBD Campaign</span>
                </div>
                <div>
                  <span>Date:</span>
                  {/* <span>{`${insightData.summery.start_date} to ${insightData.summery.end_date}`}</span> */}
                  <span>12/4/2012 to 12/4/2013</span>
                </div>
                <div>
                  <span>Segment:</span>
                  {/* <span>
                  {`${operationsMap[insightData.summary.segment.operation]} ${
                    operationsMap[insightData.summary.segment.value]
                  }`}
                </span> */}
                  <span>Elder than 20</span>
                </div>
                <div>
                  <span>Channel:</span>
                  <span>Email, SMS</span>
                  {/* <span>
                  {`${insightData.summary.channel_type[0]} ${insightData.summary.channel_type[1]}`}
                </span> */}
                </div>

                <footer>
                  <Button
                    label="More"
                    appearance="link"
                    spacing="none"
                    onClick={() => setMoreModal(true)}
                  />
                  <Modal
                    isOpen={moreModal}
                    onClose={() => setMoreModal(false)}
                    actions={[
                      { text: 'Close', onClick: () => setMoreModal(false) },
                    ]}
                    width={1200}
                  >
                    <div className={styles.moreInfo}>
                      <section className={styles.info}>
                        <h3>Campign Info</h3>

                        <div>
                          <span>Campaign Name:</span>
                          <span>{campaigns.single.name}</span>
                        </div>

                        <div>
                          <span>Campaign Description:</span>
                          <span>{campaigns.single.description}</span>
                        </div>
                        <div className={styles.date}>
                          <div>
                            <span>Start Date:</span>
                            <span>{campaigns.single.start_date}</span>
                          </div>

                          <div>
                            <span>End Date:</span>
                            <span>{campaigns.single.end_date}</span>
                          </div>
                        </div>
                      </section>

                      <section className={styles.segment}>
                        <h3>Segment</h3>
                        <div className={styles.items}>
                          {segmentDataFormatter(campaigns.signle.segment).map(
                            ({ name, value }) => (
                              <div>
                                <span>{`${name}/${value}`}</span>
                                <EditorCloseIcon />
                              </div>
                            )
                          )}
                        </div>
                      </section>

                      <section className={styles.condition}>
                        <h3>Condition</h3>

                        <div className={styles.inputs}>
                          {campaigns.single.workflow.map(
                            ({ step_type, step_details }) => (
                              <div className={styles.input}>
                                <BasicInput
                                  value="Send email (Nowrouz email)"
                                  noMargin
                                  disabled
                                />
                              </div>
                            )
                          )}
                        </div>

                        <TemplateItem
                          className={styles.templateItem}
                          photo="img/Christmas1.png"
                          name={campaigns.single.name}
                        />
                      </section>
                    </div>
                  </Modal>
                </footer>
              </Card>

              <Card title="Conversion by Gender" size="small">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={PieCreator({
                    data: chartsDataFormatter.genderChart(insightData.gender),
                    height: 180,
                    verticalLegend: true,
                  })}
                />
              </Card>

              <Card title="Operation System" noPadding size="small">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={ColumnCreator({
                    data: chartsDataFormatter.OSChart(insightData.os),
                    height: 180,
                  })}
                />
              </Card>

              <Card title="Conversion by Age and Gender" size="small">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={GroupColumnsCreator({
                    data: insightData.ageAndGender,
                    height: 180,
                  })}
                />
              </Card>
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
                        CampaignInsightQueries.getTrendsReq({
                          campaignId: insightCampaignId,
                        }),
                    },
                    {
                      title: 'Clicked',
                      onClick: () =>
                        CampaignInsightQueries.getTrendsReq({
                          campaignId: insightCampaignId,
                          statusFilter: 'click',
                        }),
                    },
                  ]}
                  small
                />
                <TableHits rows={insightData.trends} />
              </Card>

              <Card
                title="Conversion rate funnel"
                className={styles.funnelCard}
                action={
                  <Select
                    className={styles.funnelSelect}
                    options={InputsOption.select.InsightFunnel}
                    onChange={(value) => {
                      CampaignInsightQueries.getFunnelReq({
                        campaignId: insightCampaignId,
                        channelType: value,
                      })
                      setFunnelAction(value)
                    }}
                  />
                }
              >
                <HighchartsReact
                  highcharts={Highcharts}
                  // options={FunnelCreator(funnelDataMap[funnelAction])}
                  options={FunnelCreator(
                    chartsDataFormatter.funnelChart(insightData.funnel)
                  )}
                />
                <div className={styles.extraRates}>
                  <div>
                    <span>{insightData.funnel.unsubscribe}</span>
                    <span>Unsubscribed</span>
                  </div>
                  <div>
                    <span>{insightData.funnel.bounce}</span>
                    <span>Bounce</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

      {pathname === '/campaigns/create' && (
        <section className={styles.create}>
          <div className={styles.info}>
            <header>
              <div className={styles.title}>
                <span>1</span>
                <h3>Campaign Info</h3>
              </div>
              {runIsClicked && (
                <div className={styles.status}>
                  <span className={styles.valid}>
                    <CheckIcon />
                  </span>
                </div>
              )}
            </header>
            <Card className={styles.card}>
              <div className={styles.inputs}>
                <BasicInput
                  label="Campaign Name"
                  value={campaignName}
                  onChange={(value) => setCampgianName(value)}
                  noMargin
                />
                <TextArea
                  label="Campaign Description"
                  value={campaignDesc}
                  onChange={(value) => setCampaignDesc(value)}
                />

                <div className={styles.group}>
                  <DateInput
                    value={getDate(datePicker.start)}
                    label="Start Date"
                    disabled
                  />

                  <DateInput
                    value={getDate(datePicker.end)}
                    label="End Date"
                    disabled
                  />
                </div>
              </div>

              <div className={styles.calender}>
                <Calendar
                  value={datePicker}
                  onSelect={(range) => setDatePicker(range)}
                />
              </div>

              {/* <span className={styles.toggleButton}>
                <ChevronUpIcon />
              </span> */}
            </Card>
          </div>

          <div className={styles.segment}>
            <header>
              <div className={styles.title}>
                <span>2</span>
                <h3>Segment</h3>
              </div>
              <div className={styles.status}>
                {/* <span className={styles.invalid}>
                  <CrossIcon />
                </span> */}
              </div>
            </header>
            <Card className={`${styles.card} ${styles.segmentCard}`}>
              {/* <SegmentPicker /> */}
              <Filter multipleGenderSelection />

              {/* <span className={styles.toggleButton}>
                <ChevronUpIcon />
              </span> */}
            </Card>
          </div>

          <div className={styles.condition}>
            <header>
              <div className={styles.title}>
                <span>3</span>
                <h3>Pipeline</h3>
              </div>
              <div className={styles.status}>
                {/* <span className={styles.invalid}>
                  <CrossIcon />
                </span> */}
              </div>
            </header>
            <Card className={styles.card}>
              <ConditionSelects />

              {/* <span className={styles.toggleButton}>
                <ChevronUpIcon />
              </span> */}
            </Card>
          </div>

          <Button
            className={styles.runButton}
            label="Run"
            onClick={onRunClick}
          />
        </section>
      )}

      {pathname === '/campaigns/compare' && (
        <section className={styles.compare}>
          <Card title="Compare campaigns">
            <CompareTable
              campaigns={campaigns.compared}
              addOnClick={handleAddCompare}
            />
          </Card>

          <Modal
            isOpen={compareModal}
            onClose={setCompareModal}
            width="1000"
            actions={[
              {
                text: 'Compare',
                onClick: () => {
                  CamapaignQueries.compareCampaignsReq(selectedCampaigns)
                  setCompareModal(false)
                },
              },
            ]}
          >
            <div className={styles.compareModal}>
              <SearchInput
                className={styles.searchInput}
                placeHolder="Search"
              />

              <div className={styles.tableWrapper}>
                <TableTabs
                  items={[
                    {
                      title: 'Done campaigns',
                      onClick: () =>
                        CamapaignQueries.getCampaignsByChannelReq({
                          status: 'stopped',
                        }),
                    },
                    {
                      title: 'Running campaigns',
                      onClick: () =>
                        CamapaignQueries.getCampaignsByChannelReq({
                          status: 'running',
                        }),
                    },
                    {
                      title: 'Paused campaigns',
                      onClick: () =>
                        CamapaignQueries.getCampaignsByChannelReq({
                          status: 'paused',
                        }),
                    },
                  ]}
                  activeTab={compareTab}
                  setActiveTab={setCompareTab}
                />

                <DataTable
                  className={`${styles.table}`}
                  headers={tableHeaders.totalCampaigns}
                  rows={tableFormatters.campaigns.total(campaigns.items)}
                  action={false}
                  selectable
                  onSelectClick={handleComparingCampaigns}
                />
              </div>
            </div>
          </Modal>
        </section>
      )}
    </main>
  )
}

const mapStateToProps = (state) => ({
  campaigns: state.main.campaigns,
  dashboardData: state.main.campaignsDashboard,
  insightData: state.main.campaignsInsight,
})

export default connect(mapStateToProps, null)(Campaigns)
