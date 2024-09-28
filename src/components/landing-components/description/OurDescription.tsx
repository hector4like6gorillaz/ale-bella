import { AcademicCapIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import style from './our.module.scss'
import Button from 'src/components/button/Button'

const OurDescription = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-our']}`}>
        <p className={`${style['p-container-text']}`}>
          C/C/G is a full-service digital marketing agency. Strategically focused and creatively
          driven, we unlock innovative solutions that connect our clients to their customers.
        </p>

        <p className={`${style['p-container-text']}`}>
          Located in Los Angeles, a team comprised of creative disciplines in advertising, design,
          and branding. Our agency size and philosophy allow us to create performance marketing
          campaigns for startups and enterprise companies.
        </p>
        <div className={`${style['container-buttons']}`}>
          <Button label='Get in touch' />
          <Button label='Video reel' theme='secondary' />
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
