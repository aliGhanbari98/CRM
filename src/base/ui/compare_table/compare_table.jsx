import React from 'react'
import AddIcon from '@atlaskit/icon/glyph/add'
import * as R from 'ramda'
import styles from './compare_table.module.scss'

const isOdd = (num) => num % 2 !== 0

const CompareTable = ({ className, addOnClick, campaigns = [] }) => {
  const headers = campaigns.map(({ name }) => name)
  const rows = [
    {
      header: 'Total Sent',
      items: campaigns.map(({ total_sent }) => total_sent),
    },
    {
      header: 'Clicked',
      items: campaigns.map(({ clicked }) => clicked),
    },
    {
      header: 'Conversion rate',
      items: campaigns.map(({ clicked, seen }) => (clicked / seen) * 100),
    },
    {
      header: 'Bounce rate',
      items: campaigns.map(({ bounce }) => bounce),
    },
    {
      header: 'Unsubscribed',
      items: campaigns.map(({ unsubscribe }) => unsubscribe),
    },
    {
      header: 'Segmentation',
      items: campaigns.map(({ segment }) => 'segment'),
    },
    {
      header: 'Channel',
      items: campaigns.map(({ channel_types }) => channel_types[0]),
    },
  ]

  return (
    <table className={`${styles.compareTable} ${className || ''}`}>
      <thead>
        <tr>
          <td>
            <div className={styles.addButton}>
              <button
                className={headers.length >= 4 ? styles.disabled : ''}
                type="button"
                onClick={() => addOnClick instanceof Function && addOnClick()}
              >
                <AddIcon />
              </button>
            </div>
          </td>
          {((headers.length > 0 && headers) || [...Array(4)]).map(
            (header, i) => (
              <td key={i}>
                <div>{header || ''}</div>
              </td>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ header, items }, i) => (
          <tr className={isOdd(i) && styles.oddRow} key={i}>
            <td>
              <div>{header}</div>
            </td>
            {items.map((item, index) => (
              <td key={index}>
                <div>{item}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompareTable
