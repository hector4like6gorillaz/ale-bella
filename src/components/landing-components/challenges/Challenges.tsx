import { Fragment } from 'react'
import CardChallenge from './card/CardChallenge'
import style from './challenges.module.scss'
import Wave from 'src/assets/hondas/Wave'

let contentLeft = [
  {
    img: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    title: 'Consumer Insights',
    subtitle: 'Millennials Move To The Forefront',
  },
]
let contentRight = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661754027608-1707e41407c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZSUyMG9mJTIwYSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
    title: 'CPG Transformation',
    subtitle: 'Grocery Shopping Gone Digital',
  },
  {
    img: 'https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg',
    title: 'Brand Trandormation',
    subtitle: 'Building Your Brands Dream Team',
  },
]

const Challenges = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['challenge-div-container']}`}>
        <div className={`${style['div-kids']} ${style['div-kids-left']}`}>
          <div className={`${style['div-container-info']}`}>
            <p className={`${style['p-title']}`}>Insights</p>
            <p className={`${style['p-subtitle']}`}>
              Strategic Challenges. Creative Opportunities.
            </p>
            <p className={`${style['p-content']}`}>
              A strong connection needs a solid foundation. We leverage a deep understanding of
              consumer behavior and digital channels to create change that's sustainable.
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
