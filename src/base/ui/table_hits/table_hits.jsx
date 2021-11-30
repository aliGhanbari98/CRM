/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import styles from './table_hits.module.scss'

const TableHits = ({ rows = [] }) => {
  return (
    <table className={styles.table} width="100px">
      <tbody>
        <tr>
          <th />
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.time}</td>
            {[...Array(7)].map((e, i) => {
              let dayEl = <td className={styles.lightBlue} />

              row.days.forEach((day) => {
                if (day[0] === i) {
                  let color = null
                  if (day[1] > 0 && day[1] <= 5) color = styles.lightBlue
                  if (day[1] > 5 && day[1] <= 9) color = styles.medBlue
                  if (day[1] > 9 && day[1] <= 13) color = styles.darkBlue
                  if (day[1] > 13 && day[1] <= 17) color = styles.blue
                  dayEl = <td className={color} />
                }
              })
              return dayEl
            })}
          </tr>
        ))}
      </tbody>
      <footer>
        <div className={styles.spacer} />
        <div className={styles.wrapper}>
          <span className={styles.lightBlue} />
          <div>
            <span>1</span>
            <span>5</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.medBlue} />
          <div>
            <span />
            <span>9</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.darkBlue} />
          <div>
            <span />
            <span>13</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.darkBlue} />
          <div>
            <span />
            <span>17</span>
          </div>
        </div>
      </footer>
    </table>
  )
}

export default TableHits
