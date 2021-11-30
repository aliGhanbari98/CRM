/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import { Dropdown } from 'base/inputs'
import { Checkbox } from '@atlaskit/checkbox'
import { navigate } from '@reach/router'
import Pagination from '@atlaskit/pagination'
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical'
import ChevronUpIcon from '@atlaskit/icon/glyph/chevron-up'
import Accessors from './accessors'
import styles from './data_table.module.scss'
import './data-table.scss'

const isOdd = (num) => num % 2 !== 0

const DataTable = ({
  className,
  headers = [],
  rows = [],
  sortable = true,
  pagination = true,
  action = true,
  selectable,
  rowsPerPage = 20,
  onActionClick,
  onSelectClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [activeSort, setActiveSort] = useState({ id: null, type: null })
  const [showingRows, setShowingRows] = useState([])
  const [selectedPage, setSelectedPage] = useState()

  useEffect(() => {
    if (pagination) {
      setShowingRows(rows.slice(0, rowsPerPage))
      setSelectedPage(0)
    } else setShowingRows(rows)
  }, [rows])

  const handlePageChange = (pageIndex) => {
    setShowingRows(
      rows.slice((pageIndex - 1) * rowsPerPage, pageIndex * rowsPerPage)
    )
    setSelectedPage(pageIndex - 1)
  }

  let pagesIndexes = []

  if (pagination)
    pagesIndexes = [
      ...[...Array(Math.ceil(rows.length / rowsPerPage))].map(
        (_, index) => index + 1
      ),
    ]

  const handleSort = (id) => {
    if (sortable)
      setActiveSort((prevState) => {
        let prev = prevState
        if (prev.id === id) {
          if (!prev.type) prev.type = 'asc'
          else {
            if (prev.type === 'desc') {
              prev = { id: null, type: null }
              return { ...prev }
            }
            if (prev.type === 'asc') prev.type = 'desc'
          }
        } else prev = { id, type: 'asc' }

        return { ...prev }
      })
  }

  return (
    <div className={`${styles.tableWrapper} ${className || ''}`}>
      <table>
        <thead>
          <tr>
            {selectable && <th className={styles.selectHeader} />}
            {headers.map((item, index) => (
              <th key={item.index}>
                <button
                  type="button"
                  className={`${styles.wrapper} ${
                    activeSort.id === index && activeSort.type === 'asc'
                      ? styles.sortUp
                      : ''
                  } ${
                    activeSort.id === index && activeSort.type === 'desc'
                      ? styles.sortDown
                      : ''
                  }`}
                  onClick={() => handleSort(index)}
                >
                  <span>{item.title}</span>
                  <ChevronUpIcon />
                </button>
              </th>
            ))}
            {action && <th className={styles.actionHeader} />}
          </tr>
        </thead>
        <tbody>
          {showingRows.map((row, i) => (
            <>
              <tr
                key={i}
                className={`${openDropdown === i ? styles.open : ''} ${
                  openDropdown !== null && openDropdown !== i
                    ? styles.stayClose
                    : ''
                } ${isOdd(i) && styles.oddRow}`}
              >
                {selectable && (
                  <td className={styles.select}>
                    <Checkbox onChange={() => onSelectClick(row[0].id)} />
                  </td>
                )}
                {row.map(
                  (item, index) =>
                    item.name !== undefined && (
                      <td
                        key={index}
                        onClick={() => {
                          if (item.path) navigate(item.path)
                        }}
                        className={item.path && styles.clickable}
                      >
                        {(() =>
                          item.customAccessor ? (
                            <Accessors rowProps={item} rowKey={item.key} />
                          ) : (
                            item.name
                          ))()}
                      </td>
                    )
                )}
                {action && (
                  <td className={styles.action}>
                    <Dropdown
                      trigger={
                        <button className={styles.button} type="button">
                          <MoreVerticalIcon />
                        </button>
                      }
                      items={['Edit', 'Delete']}
                      onOpenChange={(val) =>
                        val.isOpen ? setOpenDropdown(i) : setOpenDropdown(null)
                      }
                      onClick={(actionType) =>
                        onActionClick({
                          action: actionType,
                          targetId: row.find(({ id }) => !!id).id,
                        })
                      }
                    />
                  </td>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>

      {pagination && pagesIndexes.length > 1 && (
        <div className={styles.footerWrapper}>
          <Pagination
            selectedIndex={selectedPage}
            onChange={(_, page, analyticsEvent) => handlePageChange(page)}
            pages={pagesIndexes}
          />
        </div>
      )}
    </div>
  )
}

export default DataTable
