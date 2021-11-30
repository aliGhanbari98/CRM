import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, navigate } from '@reach/router'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BreadCrumbs, Card, DataTable, Modal, Filter } from 'base/ui'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import FilterIcon from '@atlaskit/icon/glyph/filter'
import { Button } from 'base/buttons'
import { Select } from 'base/inputs'
import tablesHeaders from 'helpers/table_headers'
import InputsOptions from 'helpers/InputsOptions'
import {
  LineCreator,
  ColumnCreator,
  GroupColumnsCreator,
  PieCreator,
} from 'helpers/charts'
import {
  dispatchsetCustomersFields,
  dispatchSetCustomersList,
  dispatchsetEditingCustomerId,
} from 'redux/action-creators/customers'
import {
  TableHeader,
  TableHeaderDustbin,
  TotalCustomers,
  ImportCustomers,
  AddCustomer,
} from './components'
import styles from './index.module.scss'

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

const ColumnChartData = [
  {
    name: 'SMS',
    y: 83,
    color: '#ff991f',
  },
  {
    name: 'Email',
    y: 75,
    color: '#00a3bf',
  },
]

const groupColumnsChartData = [
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

const lineChartData = [
  {
    name: 'Customers',
    data: [0, 1100, 800, 1800, 2700, 1300, 2200, 3200, 3000, 3100, 3300, 3950],
  },
]

const filteredList = [
  ...[...Array(5)].map((_, index) => [
    { id: index + 1 },
    {
      _id: '5fb8e47092add608def8fdc0',
      label: 'Full Name',
      name: 'Ali Ghanbari',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc1',
      label: 'First Name',
      name: 'Ali',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc2',
      label: 'Last Name',
      name: 'Ghanbari',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc3',
      label: 'Gender',
      name: 'Male',
      is_enabled: true,
      datatype: 'radio',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc4',
      label: 'Date of birth',
      name: '1998/09/23',
      is_enabled: true,
      datatype: 'date',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc5',
      label: 'Age',
      name: '25',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc6',
      label: 'Mobile Number',
      name: '097123456789',
      is_enabled: true,
      datatype: 'number',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },

    {
      _id: '5fb8e47092add608def8fdc7',
      label: 'Email',
      name: 'sadeghahmad@gmail.com',
      is_enabled: true,
      datatype: 'email',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
  ]),
  ...[...Array(5)].map((_, index) => [
    { id: index + 5 },
    {
      _id: '5fb8e47092add608def8fdc8',
      label: 'Full Name',
      name: 'Farshad R',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc9',
      label: 'Farshad',
      name: 'Ali',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc10',
      label: 'Roozbahani',
      name: 'Ghanbari',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc11',
      label: 'Gender',
      name: 'Male',
      is_enabled: true,
      datatype: 'radio',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc12',
      label: 'Date of birth',
      name: '1993/11/23',
      is_enabled: true,
      datatype: 'date',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc13',
      label: 'Age',
      name: '28',
      is_enabled: true,
      datatype: 'str',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
    {
      _id: '5fb8e47092add608def8fdc14',
      label: 'Mobile Number',
      name: '09712323789',
      is_enabled: true,
      datatype: 'number',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },

    {
      _id: '5fb8e47092add608def8fdc15',
      label: 'Email',
      name: 'farshad@gmail.com',
      is_enabled: true,
      datatype: 'email',
      operations: ['eq', 'gt', 'gte', 'lt', 'lte'],
    },
  ]),
]

const CustomersPage = ({ tabs, customersList }) => {
  const { pathname } = useLocation()
  const bcItems = pathname.split('/').slice(0, 2)
  const [durations, setDurations] = useState()
  const [importHeaders, setImportHeaders] = useState([
    {
      sourceHeader: 'Full name',
      dropHeader: 'complete name',
      droppedItem: null,
    },
    {
      sourceHeader: 'Last name',
      dropHeader: 'last',
      droppedItem: null,
    },
    {
      sourceHeader: 'First name',
      dropHeader: 'name',
      droppedItem: null,
    },
    {
      sourceHeader: 'Gender',
      dropHeader: 'gender',
      droppedItem: null,
    },
    {
      sourceHeader: 'Date of birth',
      dropHeader: 'birthday',
      droppedItem: null,
    },
    {
      sourceHeader: 'Age',
      dropHeader: 'age',
      droppedItem: null,
    },
    {
      sourceHeader: 'Phone',
      dropHeader: 'mobile',
      droppedItem: null,
    },
    {
      sourceHeader: 'Email',
      dropHeader: 'email add',
      droppedItem: null,
    },
  ])

  const editListHandler = (id) => {
    const targetCustomer = customersList.find((row) => row[0].id === id)
    dispatchsetCustomersFields(
      targetCustomer.map((field) => ({ ...field, value: field.name }))
    )
    dispatchsetEditingCustomerId(id)
    navigate('/customers/add')
  }

  const deleteListHandler = (id) =>
    dispatchSetCustomersList(customersList.filter((row) => row[0].id !== id))

  const [droppedHeader, setDroppedHeaders] = useState([])
  const isDropped = (sourceHeader) => {
    return droppedHeader.indexOf(sourceHeader) > -1
  }
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleDrop = (index, { text }) => {
    setImportHeaders((prevState) => {
      const prev = prevState

      setDroppedHeaders((prevData) => {
        const data = prevData

        if (prev[index].droppedItem) {
          const dropIndex = data.indexOf(prev[index].droppedItem)
          if (dropIndex > -1) data.splice(dropIndex, 1)
        }

        data.push(text)
        return data
      })

      prev[index].droppedItem = text
      return [...prev]
    })
  }

  return (
    <main className={styles.customersPage}>
      <BreadCrumbs items={bcItems} tabs={tabs} />

      {pathname === '/customers/segment' && (
        <section className={styles.segment}>
          <header>
            <span>Duration</span>
            <Select options={InputsOptions.select.Duration} />
          </header>
          <div className={styles.row}>
            <Card title="Total Customers" className={styles.totalCustomers}>
              <TotalCustomers />
            </Card>
            <Card title="Reachability on channels">
              <HighchartsReact
                highcharts={Highcharts}
                options={ColumnCreator({ data: ColumnChartData, height: 200 })}
              />
            </Card>
            <Card title="Gender">
              <HighchartsReact
                highcharts={Highcharts}
                options={PieCreator({ data: pieChartData, height: 200 })}
              />
            </Card>
          </div>

          <div className={styles.row}>
            <Card title="Customer's Increase Chart">
              <HighchartsReact
                highcharts={Highcharts}
                options={LineCreator({ data: lineChartData, height: 300 })}
              />
            </Card>
            <Card title="Age and Gender Segmentation">
              <HighchartsReact
                highcharts={Highcharts}
                options={GroupColumnsCreator({
                  data: groupColumnsChartData,
                  height: 300,
                })}
              />
            </Card>
          </div>
        </section>
      )}

      {pathname === '/customers/list' && (
        <section className={styles.list}>
          <Card className={styles.card}>
            <header>
              <div className={styles.sort}>
                <span>12345 Customers</span>
              </div>
              <span>Last update 23 Nov 2020</span>

              <div className={styles.actions}>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(true)}
                  className={styles.filterButton}
                >
                  <FilterIcon />
                </button>
                <Button label="Export" className={styles.exportButton} />
              </div>
            </header>
            <Modal
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              actions={[
                {
                  text: 'Filter',
                  onClick: () => {
                    setIsFilterOpen(false)
                    dispatchSetCustomersList(filteredList)
                  },
                },
                { text: 'Close', onClick: () => setIsFilterOpen(false) },
              ]}
              width={650}
            >
              <Filter />
            </Modal>
            {customersList && (
              <DataTable
                rows={customersList}
                headers={tablesHeaders.customers}
                className={styles.dataTable}
                onActionClick={({ action, targetId }) =>
                  action === 'Delete'
                    ? deleteListHandler(targetId)
                    : editListHandler(targetId)
                }
              />
            )}
          </Card>
        </section>
      )}

      {pathname === '/customers/import/done' && (
        <DndProvider backend={HTML5Backend}>
          <section className={styles.import}>
            <Card className={styles.card}>
              <p>
                Please sort your database with drag these lables on right places
              </p>
              <div className={styles.columnsWrapper}>
                {importHeaders &&
                  importHeaders.map(({ id, sourceHeader }) => (
                    <TableHeader
                      key={id}
                      text={sourceHeader}
                      isDropped={isDropped(sourceHeader)}
                      type="column"
                    />
                  ))}
              </div>

              <DataTable
                headers={importHeaders.map((header, index) => ({
                  id: index,
                  title: (
                    <TableHeaderDustbin
                      title={header.dropHeader}
                      accept="column"
                      onDrop={(item) => handleDrop(index, item)}
                      droppedItem={header.droppedItem}
                    />
                  ),
                }))}
                sortable={false}
              />

              <div className={styles.buttons}>
                <Button label="Save" />
                <Button
                  className={styles.outlinedButton}
                  label="Cancel"
                  appearance="subtle"
                  border
                />
              </div>
            </Card>
          </section>
        </DndProvider>
      )}

      {pathname === '/customers/import' && (
        <section>
          <ImportCustomers />
        </section>
      )}

      {pathname === '/customers/add' && (
        <section>
          <AddCustomer />
        </section>
      )}
    </main>
  )
}

const mapStateToProps = (state) => ({
  customersList: state.main.customers.list,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage)
