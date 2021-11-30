// modules
import React from 'react'
import { connect } from 'react-redux'

// style
import styles from './side_bar.module.scss'

// components
import TutorialCard from './tutorialCard/tutorialCard'
import Item from './item/item'

const itemsMap = {
  background: 'Background',
  text: 'Text',
  header: 'Text',
  picture: 'Picture',
  button: 'Button',
  socialMedia: 'Social Media',
}

const SideBar = ({ settings, selectedElement }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSideBarExpantion = (dontCloseIfIsOpen) => {
    if (!isOpen) {
      document.getElementById('expandable-side-bar').style.left = '0px'
      document.getElementById('exapndable-side-bar__row').style.transform =
        'rotate(180deg)'
      setIsOpen(true)
    } else {
      if (dontCloseIfIsOpen) return
      document.getElementById('expandable-side-bar').style.left = '-310px'
      document.getElementById('exapndable-side-bar__row').style.transform =
        'rotate(0deg)'
      setIsOpen(false)
    }
  }

  React.useEffect(() => {
    if (selectedElement) {
      handleSideBarExpantion(true)
    }
  }, [selectedElement])
  return (
    <div className={styles.sideBarContainer}>
      <div id="expandable-side-bar" className={styles.sideBar}>
        <div className={styles.header}>
          <span>Contents:</span>
          <button
            type="button"
            className={styles.rowButton}
            onClick={() => handleSideBarExpantion(false)}
          >
            <img
              id="exapndable-side-bar__row"
              alt="row"
              src="img/sideBar-row.svg"
            />
          </button>
        </div>
        <div className={styles.body}>
          {Object.keys(settings).map((field, i) => {
            // switch text item between paragraph and header
            if (field === 'header' && selectedElement !== 'header') return null
            if (field === 'text' && selectedElement === 'header') return null
            return (
              <Item
                key={i}
                title={itemsMap[field]}
                field={field}
                subFields={settings[field]}
                selected={selectedElement === field}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.tutorialCard}>
        <TutorialCard />
      </div>
    </div>
  )
}

const mapStateToProps = ({
  view: {
    selectedEmailTemplate: { settings, selectedElement },
  },
}) => ({
  settings,
  selectedElement,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
