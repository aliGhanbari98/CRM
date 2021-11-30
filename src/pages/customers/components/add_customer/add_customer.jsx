/* eslint-disable camelcase */
// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// components
import { BasicInput, PhoneInput, Select, Radio, DateInput } from 'base/inputs'
import { Button } from 'base/buttons'
// inputs options
import InputsOptions from 'helpers/InputsOptions'
// actions
import { dispatchSetCustomersList } from 'redux/action-creators/customers'
// styles
import styles from './add_customer.module.scss'

const inputsMap = {
  str: { Component: BasicInput, type: 'string' },
  email: { Component: BasicInput, type: 'email' },
  number: { Component: PhoneInput },
  select: { Component: Select },
  radio: { Component: Radio },
  date: { Component: DateInput },
}

const AddCustomer = ({ fields, onSaveClick, customers }) => {
  const [state, setState] = useState([])
  useEffect(() => setState(fields), [])
  const stateHandler = (targetId) => (newValue) => {
    setState((prevState) =>
      prevState.map((item) =>
        item._id === targetId ? { ...item, value: newValue } : item
      )
    )
  }

  return (
    <div className={styles.addCustomer}>
      <div className={styles.form}>
        <h3>Information</h3>
        {state.map(
          ({ label, datatype, _id, is_enabled, value: fieldValue }, i) => {
            const input = inputsMap[datatype]
            return (
              input &&
              is_enabled && (
                <div key={i} className={styles.field}>
                  <input.Component
                    label={label}
                    type={input.type}
                    value={fieldValue}
                    items={InputsOptions.checkBox[label]}
                    options={InputsOptions.select[label]}
                    onChange={stateHandler(_id)}
                    checkedRatios={[fieldValue]}
                    noMargin={
                      datatype === 'str' ||
                      datatype === 'number' ||
                      datatype === 'email'
                    }
                  />
                </div>
              )
            )
          }
        )}
        <div className={styles.buttonContainer}>
          <Button
            label="Save"
            fit
            onClick={() => onSaveClick({ data: state, customers })}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img alt="add-customer" src="/img/groupe_customers.png" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  fields: state.main.customerFields,
  customers: state.main.customers,
})
const mapDispatchToProps = () => ({
  onSaveClick: ({ data, customers: { list, editingCustomerId } }) => {
    const editedItem = data.map((item) => ({ ...item, name: item.value }))
    dispatchSetCustomersList(
      list.map((customer) =>
        customer[0].id === editingCustomerId ? editedItem : customer
      )
    )
    navigate('/customers/list')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)
