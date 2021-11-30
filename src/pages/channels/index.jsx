/* eslint-disable indent */
// modules
import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'
import { connect } from 'react-redux'
// components
import { BreadCrumbs } from 'base/ui'
import TemplateItem from 'base/templateItem/templateItem'
import Templates from './components/templates/templates'
import Dashboard from './components/dashboard/dashboard'
import Insight from './components/insight/insight'
import Campaigns from './components/campaigns/campaigns'
// style
import styles from './index.module.scss'

const pathsMap = {
  dashboard: '/channels/dashboard',
  smsTemplates: '/channels/SMS/templates',
  emailTemplates: '/channels/email/templates',
  smsInsight: '/channels/SMS/insight',
  emailInsight: '/channels/email/insight',
  smsCampaigns: '/channels/SMS/campaigns',
  emailCampaigns: '/channels/email/campaigns',
}

const getCurrentChild = (pathname, splittedPath, items) => {
  if (splittedPath.length === 4) {
    const splitted = pathname.split('/').slice(1, 3)
    const currentChildPath = `/${splitted[0]}/${splitted[1]}`
    return items.find(({ path }) => path === currentChildPath)
  }
  return items.find(({ path }) => path === pathname)
}

const Channels = ({ items }) => {
  const [userActive, setUserActive] = useState(0)
  const [preparedActive, setPreparedActive] = useState(0)

  const sms = {
    title: 'Lorem ipsum',
    text:
      'dolor sit amet, consectetur adipiscing elit utLorem ipsum dolor sit amet, consectetur adi ....',
  }
  const userEmailTemplates = [
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={userActive === 1}
      setActive={() => setUserActive(1)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={userActive === 2}
      setActive={() => setUserActive(2)}
    />,
    // <TemplateItem
    //   photo="img/wedding1.png"
    //   name="christmas"
    //   active={userActive === 3}
    //   setActive={() => setUserActive(3)}
    // />,
    // <TemplateItem
    //   photo="img/Christmas1.png"
    //   name="christmas"
    //   active={userActive === 4}
    //   setActive={() => setUserActive(4)}
    // />,
    // <TemplateItem
    //   photo="img/Christmas2.png"
    //   name="christmas"
    //   active={userActive === 5}
    //   setActive={() => setUserActive(5)}
    // />,
    // <TemplateItem
    //   photo="img/wedding1.png"
    //   name="christmas"
    //   active={userActive === 6}
    //   setActive={() => setUserActive(6)}
    // />,
  ]
  const userSMSTemplates = [
    <TemplateItem
      sms={sms}
      active={userActive === 1}
      setActive={() => setUserActive(1)}
    />,
    <TemplateItem
      sms={sms}
      active={userActive === 2}
      setActive={() => setUserActive(2)}
    />,
    <TemplateItem
      sms={sms}
      active={userActive === 3}
      setActive={() => setUserActive(3)}
    />,
    <TemplateItem
      sms={sms}
      active={userActive === 4}
      setActive={() => setUserActive(4)}
    />,
    <TemplateItem
      sms={sms}
      active={userActive === 5}
      setActive={() => setUserActive(5)}
    />,
    <TemplateItem
      sms={sms}
      active={userActive === 6}
      setActive={() => setUserActive(6)}
    />,
  ]

  const preparedEmailTemplates = [
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={preparedActive === 1}
      setActive={() => setPreparedActive(1)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 2}
      setActive={() => setPreparedActive(2)}
    />,
    <TemplateItem
      photo="img/wedding1.png"
      name="christmas"
      active={preparedActive === 3}
      setActive={() => setPreparedActive(3)}
    />,
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={preparedActive === 4}
      setActive={() => setPreparedActive(4)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 5}
      setActive={() => setPreparedActive(5)}
    />,
    <TemplateItem
      photo="img/wedding1.png"
      name="christmas"
      active={preparedActive === 6}
      setActive={() => setPreparedActive(6)}
    />,
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={preparedActive === 7}
      setActive={() => setPreparedActive(7)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 8}
      setActive={() => setPreparedActive(8)}
    />,
    <TemplateItem
      photo="img/wedding1.png"
      name="christmas"
      active={preparedActive === 9}
      setActive={() => setPreparedActive(9)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 10}
      setActive={() => setPreparedActive(10)}
    />,
    <TemplateItem
      photo="img/wedding1.png"
      name="christmas"
      active={preparedActive === 11}
      setActive={() => setPreparedActive(11)}
    />,
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={preparedActive === 12}
      setActive={() => setPreparedActive(12)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 13}
      setActive={() => setPreparedActive(13)}
    />,
    <TemplateItem
      photo="img/Christmas1.png"
      name="christmas"
      active={preparedActive === 14}
      setActive={() => setPreparedActive(14)}
    />,
    <TemplateItem
      photo="img/Christmas2.png"
      name="christmas"
      active={preparedActive === 15}
      setActive={() => setPreparedActive(15)}
    />,
  ]

  const preparedSMSTemplates = [
    <TemplateItem
      sms={sms}
      active={preparedActive === 1}
      setActive={() => setPreparedActive(1)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 2}
      setActive={() => setPreparedActive(2)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 3}
      setActive={() => setPreparedActive(3)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 4}
      setActive={() => setPreparedActive(4)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 5}
      setActive={() => setPreparedActive(5)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 6}
      setActive={() => setPreparedActive(6)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 7}
      setActive={() => setPreparedActive(7)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 8}
      setActive={() => setPreparedActive(8)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 9}
      setActive={() => setPreparedActive(9)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 10}
      setActive={() => setPreparedActive(10)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 11}
      setActive={() => setPreparedActive(11)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 12}
      setActive={() => setPreparedActive(12)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 13}
      setActive={() => setPreparedActive(13)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 14}
      setActive={() => setPreparedActive(14)}
    />,
    <TemplateItem
      sms={sms}
      active={preparedActive === 15}
      setActive={() => setPreparedActive(15)}
    />,
  ]

  const { pathname } = useLocation()

  const bcItems = pathname.split('/').slice(0, 3)

  const splittedPath = pathname.split('/').slice(0, 4)
  const { tabs } = getCurrentChild(pathname, splittedPath, items) || {}
  useEffect(() => {
    setUserActive(0)
    setPreparedActive(0)
  }, [pathname])

  const isEmail = splittedPath[2] === 'email'

  const userTemplates = isEmail ? userEmailTemplates : userSMSTemplates

  const preparedTemplates = isEmail
    ? preparedEmailTemplates
    : preparedSMSTemplates

  return (
    <main className={styles.channels}>
      {pathname === pathsMap.dashboard ? (
        <BreadCrumbs defaultSelectedBC="Channels dashboard" />
      ) : (
        <BreadCrumbs items={bcItems} tabs={tabs} />
      )}

      {pathname === pathsMap.dashboard && (
        <section>
          <Dashboard />
        </section>
      )}

      <section>
        {pathname === pathsMap.emailTemplates ||
        pathname === pathsMap.smsTemplates ? (
          <Templates
            channelType={isEmail ? 'email' : 'sms'}
            userTemplates={userTemplates}
            preparedTemplates={preparedTemplates}
          />
        ) : null}
      </section>

      <section>
        {pathname === pathsMap.emailInsight ||
        pathname === pathsMap.smsInsight ? (
          <Insight channelType={isEmail ? 'email' : 'sms'} />
        ) : null}
      </section>

      <section>
        {pathname === pathsMap.emailCampaigns ||
        pathname === pathsMap.smsCampaigns ? (
          <Campaigns />
        ) : null}
      </section>
    </main>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Channels)
