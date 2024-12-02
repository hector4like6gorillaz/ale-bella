import React, { Fragment } from 'react'
import OurDescription from 'src/components/landing-components/description/OurDescription'
import ShowVideo from 'src/components/video/ShowVideo'
import style from './landing.module.scss'
import back from 'src/assets/ellas.jpeg'

import MainLayout from 'src/HOC/MainLayout/MainLayout'
import CellPhonesInfo from 'src/components/landing-components/cell-info/CellPhonesInfo'
import Challenges from 'src/components/landing-components/challenges/Challenges'
import Testimonial from 'src/components/landing-components/testimonials/Testimonial'
import Contact from 'src/components/landing-components/contact/Contact'
import PictureBackground from 'src/components/girlsBackground/PictureBackground'
import Button from 'src/components/button/Button'
import { useNavigate } from 'react-router-dom'

const LandingModule = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <Fragment>
        <PictureBackground backImg={back} />
        <div className={`${style['div-container-body']}`}>
          <ShowVideo />
          <div className={`${style['div-services']}`}>
            <Button
              label='Services'
              rounded
              theme='secondary'
              size='s'
              onClick={() => navigate('/services')}
            />
          </div>

          <OurDescription />
          <div className={`${style['transparent-container']}`}></div>
          {/*
          <WhatWeDo />
           */}
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
