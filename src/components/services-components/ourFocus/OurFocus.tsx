import Button from 'src/components/button/Button'
import style from './our.module.scss'

const OurFocus = () => {
  return (
    <div className={`${style['our-focus-container']}`}>
      <div className={`${style['div-container']}`}>
        <p className={`${style['p-title']}`}>Our Focus</p>
        <p className={`${style['p-content']}`}>
          At CCG, we emphasize a custom strategy to create solutions that power business growth and
          strengthen consumer connections. We are here to tackle all digital marketing needs from
          in-depth strategy review to social media management and everything in between.
        </p>

        <div className={`${style['div-button-container']}`}>
          <Button label="Let's Chat" />
        </div>
      </div>
    </div>
  )
}

export default OurFocus
