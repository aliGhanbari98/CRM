// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'
// actions
import { dispatchSetSelectedPage } from 'redux/action-creators/selectedPage'
// style
import './item.scss'

const NavButton = ({ Icon, label, onClick, isChild, selectedPageLabel }) => {
  return (
    <button
      type="button"
      className={`slideBar-item__container ${
        isChild && 'sliderBar-item__child'
      } ${label === selectedPageLabel && 'sideBar-item__selected'}`}
      onClick={onClick}
    >
      <div
        className={`slideBar-item__icon ${
          label === selectedPageLabel && 'sideBar-icon__selected'
        }`}
      >
        <Icon />
      </div>
      <span
        className={`${label === selectedPageLabel && 'sideBar-text__selected'}`}
      >
        {label}
      </span>
    </button>
  )
}

const Item = ({ path, Icon, label, children, selectedPageLabel }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div className="sideBar-item center">
      <NavButton
        Icon={Icon}
        label={label}
        selectedPageLabel={selectedPageLabel}
        onClick={() => {
          navigate(path)
          dispatchSetSelectedPage(label)
          toggleExpanded()
        }}
      />

      {expanded && (
        <div className="center">
          {children &&
            children.map(
              (
                { path: childPath, label: childLabel, Icon: ChildIcon },
                index
              ) => (
                <NavButton
                  key={index}
                  Icon={ChildIcon}
                  label={childLabel}
                  selectedPageLabel={selectedPageLabel}
                  isChild
                  onClick={() => {
                    navigate(`${childPath}`)
                    dispatchSetSelectedPage(childLabel)
                  }}
                />
              )
            )}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({
  view: {
    selectedPage: { label },
  },
}) => ({ selectedPageLabel: label })

export default connect(mapStateToProps, null)(Item)
