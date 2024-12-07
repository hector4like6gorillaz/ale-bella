import style from './carousel.module.scss'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import ho1 from 'src/assets/carousel/hotel1.jpg'
import ho2 from 'src/assets/carousel/hotel2.jpg'
import ho3 from 'src/assets/carousel/hotel3.jpg'
import ho4 from 'src/assets/carousel/hotel4.webp'

/*
Branding
Shopify websites
Design services
Email marketing and automation
Paid media & advertising
Social media management
Packing
*/

const MyCustomCarousel = () => {
  return (
    <div className={`${style['carousel-container-big']}`}>
      <CCarousel controls indicators>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho1} alt='slide 1' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Branding</p>
                <p className={`${style['p-description']}`}>
                  Descripcion de ejemplo para leer muy ancha para ver que pasa si tengo mucho texto
                  en caso de querer demasiado
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho3} alt='slide 2' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Shopify websites</p>
                <p className={`${style['p-description']}`}>Descripcion de ejemplo para leer</p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho2} alt='slide 3' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Design services</p>
                <p className={`${style['p-description']}`}>Descripcion de ejemplo para leer</p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho4} alt='slide 4' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Email marketing and automation</p>
                <p className={`${style['p-description']}`}>Descripcion de ejemplo para leer</p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho3} alt='slide 2' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Paid media & advertising</p>
                <p className={`${style['p-description']}`}>Descripcion de ejemplo para leer</p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho1} alt='slide 1' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Social media management</p>
                <p className={`${style['p-description']}`}>
                  Descripcion de ejemplo para leer muy ancha para ver que pasa si tengo mucho texto
                  en caso de querer demasiado
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className={`${style['div-container-img']}`}>
            <CImage className={`${style['img-props']}`} src={ho2} alt='slide 3' />
            <div className={`${style['back-black']}`}>
              <div className={`${style['content-carousel']}`}>
                <p className={`${style['p-title']}`}>Packing</p>
                <p className={`${style['p-description']}`}>Descripcion de ejemplo para leer</p>
              </div>
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}

export default MyCustomCarousel
