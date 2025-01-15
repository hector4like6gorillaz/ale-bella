import style from './our.module.scss'
import Button from 'src/components/button/Button'

const OurDescription = () => {
  const tapButton = () => {
    window.open('https://calendar.app.google/smjdRrGA95W6BRVr8', '_blank')
  }

  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-our']}`}>
        <h2 className={`${style['h2-title']}`}>WHO WE ARE</h2>
        <p className={`${style['p-container-text']}`}>
          We are Ale-Bella, a full-service agency based in Los Angeles. Founded by Alexa and
          Isabella, we have created tailored marketing strategies for clients globally to bring our
          expertise to more markets.
        </p>

        <div className={`${style['container-buttons']}`}>
          <Button label='Get in touch' onClick={() => tapButton()} />
        </div>
      </div>
    </div>
  )
}

export default OurDescription
