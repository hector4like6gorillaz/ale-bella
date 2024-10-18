import React, { Fragment, useEffect } from 'react'
import OurDescription from 'src/components/landing-components/description/OurDescription'
import ShowVideo from 'src/components/video/ShowVideo'
import style from './landing.module.scss'
import back from 'src/assets/ellas.jpeg'

import MainLayout from 'src/HOC/MainLayout/MainLayout'
import WhatWeDo from 'src/components/landing-components/what-we-do/WhatWeDo'
import CellPhonesInfo from 'src/components/landing-components/cell-info/CellPhonesInfo'
import Challenges from 'src/components/landing-components/challenges/Challenges'
import Testimonial from 'src/components/landing-components/testimonials/Testimonial'
import Contact from 'src/components/landing-components/contact/Contact'
import PictureBackground from 'src/components/girlsBackground/PictureBackground'

const LandingModule = () => {
  return (
    <MainLayout>
      <Fragment>
        <PictureBackground backImg={back} />
        <div className={`${style['div-container-body']}`}>
          <ShowVideo />
          <OurDescription />
          <div className={`${style['transparent-container']}`}></div>
          <WhatWeDo />
          <CellPhonesInfo />
          <Challenges />
          <Testimonial />
          <Contact />
        </div>
      </Fragment>
    </MainLayout>
  )
}

export default React.memo(LandingModule)
