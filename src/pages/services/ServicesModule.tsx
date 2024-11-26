import style from './services.module.scss'
import { Fragment } from 'react'
import BannerTop from 'src/components/bannerTop/BannerTop'
import PictureBackground from 'src/components/girlsBackground/PictureBackground'
import MainLayout from 'src/HOC/MainLayout/MainLayout'
import back from 'src/assets/ellas.jpeg'
import banner from 'src/assets/services/lena.jpg'
import Anounce from 'src/components/anounce/Anounce'
import SquareLabel from 'src/components/services-components/square-label/SquareLabel'

const ServicesModule = () => {
  return (
    <MainLayout>
      <Fragment>
        <Anounce text='SERVICES SERVICES' />
        <BannerTop backgroundImg={banner} />

        <SquareLabel />
        {/*
        <OurFocus />
        <WhatWeDo />
         */}
        <PictureBackground backImg={back} />
        <div className={`${style['transparent']}`}> </div>
      </Fragment>
    </MainLayout>
  )
}

export default ServicesModule
