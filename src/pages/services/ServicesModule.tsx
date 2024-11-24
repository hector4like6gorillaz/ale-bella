import style from './services.module.scss'
import { Fragment } from 'react'
import BannerTop from 'src/components/bannerTop/BannerTop'
import PictureBackground from 'src/components/girlsBackground/PictureBackground'
import OurFocus from 'src/components/services-components/ourFocus/OurFocus'
import MainLayout from 'src/HOC/MainLayout/MainLayout'
import back from 'src/assets/ellas.jpeg'
import WhatWeDo from 'src/components/landing-components/what-we-do/WhatWeDo'
import Anounce from 'src/components/anounce/Anounce'

const ServicesModule = () => {
  return (
    <MainLayout>
      <Fragment>
        <Anounce />
        <BannerTop />
        <OurFocus />
        <PictureBackground backImg={back} />
        <div className={`${style['transparent']}`}> </div>
        <WhatWeDo />
      </Fragment>
    </MainLayout>
  )
}

export default ServicesModule
