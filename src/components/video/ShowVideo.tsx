import style from './show.module.scss'
import video from 'src/assets/video/landing.mp4'
import Wave from 'src/assets/hondas/Wave'

const ShowVideo = ({ showWave = true }: { showWave?: boolean }) => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['video-container']}`}>
        <div className={`${style['container-video-play']}`}>
          <video className={`${style['video-label']}`} autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        {showWave && <Wave className={`${style['bottom-class-wave']}`} />}
        <div className={`${style['container-black-transparent']}`}>
          <h4 className={`${style['font-color']} ${style['font-size-title']}`}>
            ARE YOU A BUSINESS OWNER?
          </h4>
          <h2 className={`${style['font-color']} ${style['font-size-subTitles']}`}>WE GET YOUR</h2>
          <h2 className={`${style['font-color']} ${style['font-size-subTitles']}`}>
            ONLINE PRESENCE
          </h2>
          <h2 className={`${style['font-color']} ${style['font-size-subTitles']}`}>INCREASED</h2>
        </div>
      </div>
    </div>
  )
}

export default ShowVideo
