import { Fragment } from 'react'
import BannerTop from 'src/components/bannerTop/BannerTop'
import PictureBackground from 'src/components/girlsBackground/PictureBackground'
import MainLayout from 'src/HOC/MainLayout/MainLayout'
import back from 'src/assets/ellas.jpeg'
import banner from 'src/assets/services/lena.jpg'
import Anounce from 'src/components/anounce/Anounce'
import SquareLabel from 'src/components/services-components/square-label/SquareLabel'
import MyCustomCarousel from 'src/components/carousell-imagenes/MyCustomCarousel'
import Services from 'src/components/services-components/services/Services'

const ServicesModule = () => {
  return (
    <MainLayout>
      <Fragment>
        <Anounce text='SERVICES SERVICES' />
        <BannerTop backgroundImg={banner} />

        <SquareLabel />
        <Services />
        <MyCustomCarousel />

        <PictureBackground backImg={back} />
      </Fragment>
    </MainLayout>
  )
}

export default ServicesModule
