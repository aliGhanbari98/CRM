// modules
import React from 'react'

// components
import Slider from 'react-slick'
import TemplateItem from 'base/templateItem/templateItem'

import styles from './carousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default ({ addTemplate, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 1,
  }
  console.log(items)
  return (
    <div className={`${styles.carouselContainer}`}>
      {addTemplate && (
        <TemplateItem
          className={styles.addButton}
          photo="img/add.png"
          name="Add Template"
          addTemplate
        />
      )}
      <Slider className={styles.slider} {...settings}>
        {items}
      </Slider>
    </div>
  )
}
