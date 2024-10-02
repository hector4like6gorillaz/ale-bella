import { AcademicCapIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import style from './our.module.scss'
import Button from 'src/components/button/Button'

const OurDescription = () => {
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
          <Button label='Get in touch' />
          <Button label='OUR STORY' theme='secondary' />
        </div>
        <div className={`${style['marcas-work']}`}>
          {Array.from({ length: 4 }, (_, index) => {
            return (
              <div key={index} className={`${style['mark-container']}`}>
                <AcademicCapIcon className={`${style['icon-style']}`} />
              </div>
            )
          })}
        </div>
        <div className={`${style['marcas-work']}`}>
          {Array.from({ length: 4 }, (_, index) => {
            return (
              <div key={index} className={`${style['mark-container']}`}>
                <ArrowDownCircleIcon className={`${style['icon-style']}`} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurDescription
