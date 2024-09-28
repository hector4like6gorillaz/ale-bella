import React, { Fragment } from 'react'
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

const LandingModule = () => {
  return (
    <MainLayout>
      <Fragment>
        <div className={`${style['div-backgroun-img']}`}>
          <img className={`${style['img-properties']}`} src={back} />
        </div>
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
