// modules
import React from 'react'

// components
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from '@atlaskit/dropdown-menu'

export default ({ items, trigger, fit, onClick, onOpenChange }) => {
  return (
    <DropdownMenu
      trigger={trigger}
      shouldFitContainer={fit}
      onOpenChange={(val) =>
        typeof onOpenChange === 'function' && onOpenChange(val)
      }
    >
      <DropdownItemGroup>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={() => typeof onClick === 'function' && onClick(item)}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownItemGroup>
    </DropdownMenu>
  )
}
