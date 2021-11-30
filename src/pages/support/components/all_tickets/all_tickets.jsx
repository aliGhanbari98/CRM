// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
// helpers
import tableHeaders from 'helpers/table_headers'
// components
import { DataTable, TableTabs } from 'base/ui'
// style
import styles from './all_tickets.module.scss'

const allTickets = [
  ...[...Array(10)].map(() => [
    { name: '2325323' },
    { name: 'There is some problem, Help!' },
    { name: 'IT' },
    { name: '12:51 2019/09/21' },
    { name: '13:45 2019/09/23' },
    { name: 'status', key: 'status', status: 'Pending', customAccessor: true },
  ]),
]

const answerdTickets = [
  ...[...Array(10)].map(() => [
    { name: '2325323' },
    { name: 'There is some problem, Help!' },
    { name: 'IT' },
    { name: '12:51 2019/09/21' },
    { name: '13:45 2019/09/23' },
    { name: 'status', key: 'status', status: 'Answerd', customAccessor: true },
  ]),
]

const pendingTickets = [
  ...[...Array(10)].map(() => [
    { name: '2325323' },
    { name: 'There is some problem, Help!' },
    { name: 'IT' },
    { name: '12:51 2019/09/21' },
    { name: '13:45 2019/09/23' },
    { name: 'status', key: 'status', status: 'Pending', customAccessor: true },
  ]),
]

const closedTickets = [
  ...[...Array(10)].map(() => [
    { name: '2325323' },
    { name: 'There is some problem, Help!' },
    { name: 'IT' },
    { name: '12:51 2019/09/21' },
    { name: '13:45 2019/09/23' },
    { name: 'status', key: 'status', status: 'Closed', customAccessor: true },
  ]),
]

const tabItemsMap = {
  0: allTickets,
  1: answerdTickets,
  2: pendingTickets,
  3: closedTickets,
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <section className={styles.allTickets}>
      <div className={styles.details}>
        <span>123 total campaigns</span>
        <span>last update 23 nov 2020</span>
      </div>

      <div className={styles.tableWrapper}>
        <TableTabs
          items={[
            'All Tickets',
            'Answerd Tickets',
            'Pending Tickets',
            'Closed Tickets',
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <DataTable
          className={styles.table}
          headers={tableHeaders.tickets}
          rows={tabItemsMap[activeTab]}
          action={false}
        />
      </div>
    </section>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
