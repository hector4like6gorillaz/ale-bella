import Button from 'src/components/button/Button'
import style from './cell.module.scss'
import video from 'src/assets/video/limon.mp4'

const CellPhonesInfo = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-all-cell']}`}>
        <div className={`${style['container-kid']} ${style['container-kid-left']}`}>
          <div className={`${style['container-video-play']}`}>
            <video className={`${style['video-label']}`} autoPlay muted loop>
              <source src={video} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className={`${style['container-kid']} ${style['container-kid-right']}`}>
          <p className={`${style['p-title-primary']}`}>Are you ready to take the next step?</p>
          <p className={`${style['p-sub-title-primary']}`}>
            Don’t Wait Longer and Elevate Your Digital Presence
          </p>
          <p className={`${style['p-sub-title-content']}`}>
            We help you reach your digital marketing goals with unique strategies
          </p>
          <div>
            <Button label='Free Consultation' theme='secondary' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CellPhonesInfo
