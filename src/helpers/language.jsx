import React from 'react'
import Languages from '../languages'
import Configs from '../configs/global'

export const getCurrentLanguage = () => {
  const LANG = localStorage.getItem('lang')
  if (LANG === 'FA' || LANG === 'EN') return LANG
  localStorage.setItem('lang', Configs.DEFAULT_LANGUAGE)
  return Configs.DEFAULT_LANGUAGE
}

export const Lang = ({ id }) => {
  const CurrentLanguage = Languages[getCurrentLanguage()]
  return <>{CurrentLanguage[id] || id}</>
}

export const lang = (id) => {
  const CurrentLanguage = Languages[getCurrentLanguage()]
  return CurrentLanguage[id] || id
}

export const setLanguage = (language) => {
  localStorage.setItem('lang', language)
  window.location.reload()
}
