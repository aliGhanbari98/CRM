/* eslint-disable no-undef */
// modules
import React, { useState } from 'react'
// components
import Toggle from '@atlaskit/toggle'
import { EditorInput, ColorPicker } from 'base/inputs'
// actions
import {
  dispatchSetTemplateSettings,
  dispatchToggleSocialMedia,
} from 'redux/action-creators/template.actinos'
// style
import styles from './item.module.scss'

const Background = ({ field, subFields }) => (
  <div className={styles.background}>
    <div className={styles.colorPicker}>
      <EditorInput
        isColorPicker
        label="Color"
        subField="color"
        field={field}
        value={subFields.color}
      />
    </div>
    <EditorInput
      label="Add picture"
      size="sm"
      placeHolder="upload"
      subField="photoSRC"
      field={field}
      value={subFields.photoSRC}
    />
    <EditorInput
      label="Alt text"
      size="lr"
      placeHolder="Background photo"
      hasBorder
      subField="alt"
      field={field}
      value={subFields.alt}
    />
  </div>
)

const TextStylingButton = ({ img, value, subField, field, textAlign }) => {
  const activeStatusHandler = () => {
    if (textAlign) return value === textAlign
    return value
  }
  return (
    <button
      type="button"
      className={`${styles.textStylingButton} ${
        activeStatusHandler() && styles.buttonIsActive
      }`}
      onClick={() =>
        dispatchSetTemplateSettings({
          field,
          subField,
          newValue: textAlign || !value,
        })
      }
    >
      <img alt="button" src={img} />
    </button>
  )
}

const Text = ({ field, subFields }) => (
  <div className={styles.text}>
    <div>
      <EditorInput
        isSelect
        size="fit"
        placeHolder="Font"
        subField="fonts"
        field={field}
        value={subFields.fonts}
        options={[
          { label: 'a', value: 'a' },
          { label: 'a', value: 'a' },
          { label: 'a', value: 'a' },
        ]}
      />
    </div>
    <div className={styles.textMiddle}>
      <EditorInput
        isSelect
        size="md"
        placeHolder="Style"
        subField="style"
        field={field}
        value={subFields.style}
        options={[
          { label: 'a', value: 'a' },
          { label: 'a', value: 'a' },
          { label: 'a', value: 'a' },
        ]}
      />
      <EditorInput
        isSelect
        size="md"
        placeHolder="Font size"
        subField="fontSize"
        field={field}
        value={subFields.fontSize}
        options={[
          { label: '20', value: '20' },
          { label: '18', value: '18' },
          { label: '15', value: '15' },
        ]}
      />
    </div>
    <div className={styles.textMiddle}>
      <TextStylingButton
        img="/img/bold.svg"
        subField="bold"
        field={field}
        value={subFields.bold}
      />
      <TextStylingButton
        img="/img/italic.svg"
        subField="italic"
        field={field}
        value={subFields.italic}
      />
      <TextStylingButton
        img="/img/textalign-left.svg"
        textAlign="left"
        subField="textAlign"
        field={field}
        value={subFields.textAlign}
      />
      <TextStylingButton
        img="/img/textalign-center.svg"
        textAlign="center"
        subField="textAlign"
        field={field}
        value={subFields.textAlign}
      />
      <TextStylingButton
        img="/img/textalign-right.svg"
        textAlign="right"
        subField="textAlign"
        field={field}
        value={subFields.textAlign}
      />
      <div className={styles.colorPicker}>
        <ColorPicker
          value={subFields.color}
          onChange={(color) =>
            dispatchSetTemplateSettings({
              field,
              subField: 'color',
              newValue: color,
            })
          }
        />
      </div>
    </div>
  </div>
)

const Picture = ({ field, subFields }) => (
  <div className={styles.picture}>
    <div className={styles.colorPicker}>
      <EditorInput
        isColorPicker
        label="Color"
        subField="color"
        field={field}
        value={subFields.color}
      />
    </div>
    <EditorInput
      label="Add picture"
      size="sm"
      placeHolder="Upload"
      subField="photoSRC"
      field={field}
      value={subFields.photoSRC}
    />
    <EditorInput
      label="Alt text"
      size="lr"
      placeHolder="Header photo"
      subField="alt"
      hasBorder
      field={field}
      value={subFields.alt}
    />
  </div>
)

const Button = ({ field, subFields }) => (
  <div>
    <EditorInput
      isSelect
      size="fit"
      label="Fonts"
      placeHolder="Fonts"
      subField="fonts"
      spaceBetween
      field={field}
      value={subFields.fonts}
      options={[
        { label: 'a', value: 'a' },
        { label: 'a', value: 'a' },
        { label: 'a', value: 'a' },
      ]}
    />
    <EditorInput
      isSelect
      size="md"
      label="Font size"
      placeHolder="Font size"
      subField="fontSize"
      spaceBetween
      field={field}
      value={subFields.fontSize}
      options={[
        { label: '20', value: '20' },
        { label: '18', value: '18' },
        { label: '15', value: '15' },
      ]}
    />
    <div className={styles.colorPicker}>
      <EditorInput
        isColorPicker
        label="Text Color"
        field={field}
        subField="textColor"
        spaceBetween
        value={subFields.textColor}
      />
    </div>

    <EditorInput
      isSelect
      size="md"
      label="Button style"
      placeHolder="Button style"
      subField="style"
      field={field}
      spaceBetween
      value={subFields.style}
      options={[
        { label: '20', value: '20' },
        { label: '18', value: '18' },
        { label: '15', value: '15' },
      ]}
    />

    <div className={styles.colorPicker}>
      <EditorInput
        isColorPicker
        label="Button Color"
        subField="color"
        field={field}
        spaceBetween
        value={subFields.color}
      />
    </div>

    <EditorInput
      size="lr"
      label="Button link"
      placeHolder="https://"
      subField="link"
      field={field}
      spaceBetween
      value={subFields.link}
      hasBorder
    />
  </div>
)

const SocialMedia = ({ subFields }) => (
  <div className={styles.socialMedia}>
    {subFields.map((item, index) => (
      <div className={styles.socialMediaItem}>
        <img alt="social-media" src={subFields[index].imageSRC} />
        <EditorInput
          size="lr"
          placeHolder="insert link"
          socialMediaIndex={index}
          isSocialMediaLink
        />
        <Toggle
          id="toggle-large"
          size="large"
          defaultChecked={item.active}
          value="value"
          onChange={() =>
            dispatchToggleSocialMedia({
              field: 'active',
              index,
              newValue: !subFields[index].active,
            })
          }
        />
      </div>
    ))}
  </div>
)

const itemsMap = {
  Background,
  Text,
  Picture,
  Button,
  'Social Media': SocialMedia,
}

export default ({ title, field, selected, subFields }) => {
  const [isOpen, setIsOpen] = useState(false)

  React.useEffect(() => {
    setIsOpen(selected)
  }, [selected])
  const Item = itemsMap[title]
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <label>{title}</label>
        <div>
          <span />
          {/* <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <img
              id="edit-template__sidebar-item-button"
              alt="closed"
              src={isOpen ? '/img/close-row.svg' : '/img/open-row.svg'}
            />
          </button> */}
        </div>
      </div>
      {isOpen && (
        <div className={styles.items}>
          <Item field={field} subFields={subFields} />
        </div>
      )}
    </div>
  )
}
