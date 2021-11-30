// modules
import React from 'react'
import { connect } from 'react-redux'
// helpers
import tableHeaders from 'helpers/table_headers'
// components
import { Card, DataTable } from 'base/ui'
import NewTicket from './new_ticket/new_ticket'
// style
import styles from './dashboard.module.scss'

const openTicketsRows = [
  ...[...Array(4)].map(() => [
    { name: '2325323' },
    { name: 'There is some problem, Help!' },
    { name: 'IT' },
    { name: '12:51 2019/09/21' },
    { name: '13:45 2019/09/23' },
    { name: 'status', key: 'status', status: 'Pending', customAccessor: true },
  ]),
]

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.ticketsInfo}>
        <Card className={styles.openTickets} title="Open Tickets" size="small">
          <DataTable
            headers={tableHeaders.tickets}
            rows={openTicketsRows}
            pagination={false}
            action={false}
          />
        </Card>

        <Card className={styles.tickets} title="Tickets" size="small">
          <div className={styles.total}>
            <span>Total</span>
            <span>1542</span>
          </div>
          <div>
            <span>Answerd</span>
            <span>12</span>
          </div>
          <div>
            <span>Pending</span>
            <span>42</span>
          </div>
          <div>
            <span>Closed</span>
            <span>8</span>
          </div>
        </Card>
      </div>

      <div className={styles.form}>
        <Card className={styles.newTicket} title="New Ticket">
          <NewTicket />
        </Card>
      </div>
    </section>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
