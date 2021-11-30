import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styles from './table_header.module.scss'

const TableHeader = ({ isDropped, type, text }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <span
      ref={dragRef}
      className={`${styles.headerItem} ${isDragging ? styles.dragging : ''} ${
        isDropped ? styles.dropped : ''
      }`}
    >
      {text}
    </span>
  )
}

export const TableHeaderDustbin = ({ title, accept, onDrop, droppedItem }) => {
  const [{ isOver }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div
      className={`${styles.headerDustbin} ${isOver ? styles.over : ''} ${
        droppedItem ? styles.dropped : ''
      }`}
      ref={drop}
    >
      {(() => {
        if (!isOver) {
          if (!droppedItem) return title
          return droppedItem
        }
        return 'Release to drop'
      })()}
    </div>
  )
}

export default TableHeader
