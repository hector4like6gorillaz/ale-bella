import Button from 'src/components/button/Button'
import style from './cell.module.scss'
import video from 'src/assets/video/limon.mp4'

const CellPhonesInfo = () => {
  return (
    <div className={`${style['container-all-cell']}`}>
      <div className={`${style['container-kid']} ${style['container-kid-left']}`}>
        <div className={`${style['container-video-play']}`}>
          <video className={`${style['video-label']}`} autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className={`${style['container-kid']} ${style['container-kid-right']}`}>
        <p className={`${style['p-title-primary']}`}>Transforming Direct to Consumer Sales</p>
        <p className={`${style['p-sub-title-primary']}`}>
          We are building sustainable brand growth through omnichannel campaigns.
        </p>
        <p className={`${style['p-sub-title-content']}`}>
          As the world evolves, so do our capabilities. Our model is strategically built to work
          with organizations of all sizes
        </p>
        <div>
          <Button label='Learn more' theme='secondary' />
        </div>
      </div>
    </div>
  )
}

export default CellPhonesInfo
