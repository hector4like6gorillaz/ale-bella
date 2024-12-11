import { Fragment } from 'react'
import CardChallenge from './card/CardChallenge'
import style from './challenges.module.scss'
import Wave from 'src/assets/hondas/Wave'
import efi from 'src/assets/howWe/eficiencia.jpg'
import exc from 'src/assets/howWe/exclusividad.jpg'
import trans from 'src/assets/howWe/trans.jpg'

let contentLeft = [
  {
    img: trans,
    title: 'Transparency',
    subtitle:
      "We're all about keeping it 100% with our clients. No shady business here, we lay it all out on the table so you know exactly what's going on with your digital marketing campaigns.",
  },
]
let contentRight = [
  {
    img: efi,
    title: 'Efficiency',
    subtitle:
      "Time is money. That's why we've got our digital marketing game on lock, delivering top-notch results in record time. We optimize every step to make sure your money is well spent.",
  },
  {
    img: exc,
    title: 'Exclusivity',
    subtitle:
      "You're one of a kind, and your digital marketing should be too. We craft custom strategies tailored to your unique biz needs, so you can stay ahead of the competition.",
  },
]

const Challenges = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['challenge-div-container']}`}>
        <div className={`${style['div-kids']} ${style['div-kids-left']}`}>
          <div className={`${style['div-container-info']}`}>
            <p className={`${style['p-title']}`}>Insights</p>
            <p className={`${style['p-subtitle']}`}>HOW WE WORK</p>
            <p className={`${style['p-content']}`}>
              As analytical innovators, we provide outstanding brand development, unforgettable
              content, engaging narratives, effective conversion tactics, and remarkable business
              growth. We constantly search for new topics and algorithms to target your unique
              audience. Our strategies are designed to elevate your brand and maximize your market
              potential.
            </p>
          </div>

          {contentLeft.map((item, index) => {
            return (
              <Fragment key={index + item.subtitle}>
                <CardChallenge content={item} />
              </Fragment>
            )
          })}
        </div>
        <div className={`${style['div-kids']} ${style['div-kids-rigth']}`}>
          {contentRight.map((item, index) => {
            return (
              <Fragment key={index + item.subtitle}>
                <CardChallenge content={item} />
              </Fragment>
            )
          })}
        </div>
      </div>
      <Wave className={`${style['wave-position']}`} color={'#fdb4bf'} />
    </div>
  )
}

export default Challenges
