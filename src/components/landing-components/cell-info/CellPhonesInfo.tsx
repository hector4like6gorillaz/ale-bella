import Button from 'src/components/button/Button'
import style from './cell.module.scss'
import video from 'src/assets/video/mezcal.mp4'
import { useEffect, useRef } from 'react'

const CellPhonesInfo = () => {
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
      <div className={`${style['container-all-cell']}`}>
        <div className={`${style['container-kid']} ${style['container-kid-left']}`}>
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
