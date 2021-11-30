// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// style
import './register.scss'
// queries
import { UserQueries } from 'queries'
// components
import { BasicInput } from 'base/inputs'
import { Button } from 'base/buttons'
import { CompanySection, PersonalSection } from './components'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [jobPosition, setJobPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('+98')

  const [companyName, setCompanyName] = useState('')
  const [industry, setIndustry] = useState('industry')
  const [country, setCountry] = useState('Iran')
  const [city, setCity] = useState('Tehran')

  const [address, setAddress] = useState('')

  const onClick = () => {
    UserQueries.registerReq({
      fullName,
      jobPosition,
      email,
      phoneNumber: `${countryCode}${phone}`,
      companyName,
      industry,
      country,
      city,
      address,
    })
  }

  return (
    <div className="register">
      <div className="register__add-button">
        <Button
          onClick={() => navigate('/login')}
          appearance="subtle-link"
          label="Back To Login"
        />
      </div>
      <span className="register-title">Calistu CRM</span>
      <div className="register-card">
        <span>Register</span>
        <div className="register-card__body">
          <PersonalSection
            {...{
              fullName,
              jobPosition,
              email,
              phone,
              countryCode,
              setFullName,
              setJobPosition,
              setEmail,
              setCountryCode,
              setPhone,
            }}
          />
          <CompanySection
            {...{
              setCompanyName,
              setIndustry,
              setCountry,
              setCity,
              companyName,
              industry,
              country,
              city,
            }}
          />
          <BasicInput
            fit
            label="Detailed Address"
            value={address}
            onChange={setAddress}
          />
        </div>

        <div className="register-card__footer center">
          <div>
            <Button fit label="Request for Account" onClick={onClick} />
          </div>
        </div>
      </div>
      <span className="policy">
        Read our
        <button type="button"> Terms of Service </button>
        and
        <button type="button"> Privacy Policy </button>
      </span>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
