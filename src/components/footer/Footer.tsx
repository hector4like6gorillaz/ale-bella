import { Fragment } from 'react'
import OptionsFooter from './components/OptionsFooter'
import style from './footer.module.scss'
import logo from 'src/assets/logos/ale-logo.png'
import Input from '../input/Input'
import { ArrowRightIcon, ClockIcon } from '@heroicons/react/24/outline'

const menuFooter = [
  {
    title: 'Contact',
    options: [
      { name: 'Send Inquiry', link: '' },
      { name: 'Email', link: '' },
      { name: 'Call Us', link: '' },
    ],
  },
]
const Footer = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['footer-container']}`}>
        <div className={`${style['div-all-top-container']}`}>
          <div className={`${style['div-left-container']}`}>
            <div className={`${style['logo-footer-container']}`}>
              <img className={`${style['logo-footer']}`} src={logo} />
            </div>
            <p className={`${style['p-stay']}`}>Stay in the Loop</p>
            <p>
              Get updates about our insights,
              <br />
              content and news.
            </p>
            <Input placeHolder='Email' Icon={ArrowRightIcon} onClick={() => console.log('Holo')} />
            <div>
              <p className={`${style['p-small']}`}></p>
              <p className={`${style['p-small']}`}></p>
            </div>
          </div>
          <div className={`${style['container-options']}`}>
            {menuFooter.map((item, index) => {
              return (
                <Fragment key={`${item.title} ${index}`}>
                  <OptionsFooter title={item.title} options={item.options} />
                </Fragment>
              )
            })}
          </div>
        </div>
        <div className={`${style['social-media']}`}>
          <ClockIcon className={`${style['icon-prop']}`} />
          <ClockIcon className={`${style['icon-prop']}`} />
          <ClockIcon className={`${style['icon-prop']}`} />
        </div>
        <div className={`${style['div-line']}`}></div>
        <div className={`${style['social-media']}`}>
          <p className={`${style['p-derechos']}`}>
            © 2021 ALE-BELLA. All rights reserved. Made with LOVE in Los Angeles, California
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
