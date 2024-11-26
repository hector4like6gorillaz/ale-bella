import Wave from 'src/assets/hondas/Wave'
import style from './banner.module.scss'

const BannerTop = ({
  backgroundImg = 'https://sageisland.com/wp-content/uploads/2020/03/connecting-with-your-customer-digitally.jpg',
}: {
  backgroundImg?: string
}) => {
  return (
    <div className={`${style['container-banner-top']}`}>
      <div className={`${style['img-container']}`}>
        <img className={`${style['img']}`} src={backgroundImg} />
      </div>
      <div className={`${style['background-black-container']}`}>
        <div className={`${style['div-titles-container']}`}>
          {/*
          <p className={`${style['p-title']}`}>What We Do​</p>
          <br />
          <h3 className={`${style['h3-title']}`}>A tailored approach</h3>
          <h3 className={`${style['h3-title']}`}>to connect Brands</h3>
          <h3 className={`${style['h3-title']}`}>and Customers</h3>
          */}
          <p className={`${style['p-title']}`}>
            A powerful brand is built on more than just a logo and slogan.
          </p>
          <p className={`${style['p-title']}`}>
            We craft brands that captivate attention and ignite curiosity.
          </p>
        </div>
      </div>
      <Wave className={`${style['wave-class']}`} />
    </div>
  )
}

export default BannerTop
