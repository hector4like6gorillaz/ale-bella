import style from './show.module.scss'
import video from 'src/assets/video/landing.mp4'
import Wave from 'src/assets/hondas/Wave'
import { useEffect, useRef } from 'react'

const ShowVideo = ({ showWave = true }: { showWave?: boolean }) => {
  const videoRef = useRef<any>(null)
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        console.log('Reproducción automática bloqueada, esperando interacción')
      })
    }
  }, [])
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['video-container']}`}>
        <div className={`${style['container-video-play']}`}>
          <video
            ref={videoRef}
            className={`${style['video-label']}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type='video/mp4' />
            <source src={video} type='video/webm' />
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
