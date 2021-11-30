import React, { useEffect, useState } from 'react'
import { navigate, useLocation } from '@reach/router'
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import Tabs from 'base/ui/tabs/tabs'
import { Button } from 'base/buttons'
import styles from './breadcrumbs.module.scss'

const BreadCrumbs = ({
  items,
  tabs,
  buttonLabel,
  buttonOnClick,
  defaultSelectedBC,
}) => {
  const { pathname } = useLocation()
  const [searchText, setSearchText] = useState()
  const [selectedTab, setSelectedTab] = useState({})
  const [tabItems, setTabItems] = useState([])
  const [BCItems, setBCItems] = useState()

  useEffect(() => {
    if (tabs) {
      const temp = []
      tabs.forEach(({ label, path }, index) => {
        temp.push({
          title: label,
          onClick: () => {
            navigate(path)
          },
          path,
        })
        if (path === pathname) setSelectedTab({ title: label, index })
      })

      setTabItems(temp)
      // if user navigated to insight page
      if (pathname.includes('/campaigns/insight')) {
        const newBCItems = [...items, 'Total Campaigns']
        const name = 'Template Name'
        setSelectedTab({ title: name, index: 1 })
        setBCItems(newBCItems)
        return
      }
      setBCItems(items)
      return
    }

    // if there were no tabs
    setSelectedTab({ title: defaultSelectedBC })
    setTabItems([])
  }, [tabs, pathname])

  return (
    <div className={styles.breadCrumbs}>
      <div>
        <Breadcrumbs>
          {BCItems &&
            BCItems.map((item, index) =>
              item ? (
                <BreadcrumbsItem
                  className="bread"
                  key={index}
                  href=""
                  text={item.charAt(0).toUpperCase() + item.slice(1)}
                />
              ) : null
            )}
          <BreadcrumbsItem href="" text={selectedTab.title} />
        </Breadcrumbs>

        <div className={styles.search}>
          {buttonLabel && (
            <Button
              appearance="subtle"
              border
              className={styles.button}
              label={buttonLabel}
              onClick={buttonOnClick}
            />
          )}
        </div>
      </div>
      <Tabs
        tabs={tabItems}
        activeTab={selectedTab}
        setActiveTab={setSelectedTab}
        noBorderBottom={!!defaultSelectedBC}
      />
    </div>
  )
}

export default BreadCrumbs
