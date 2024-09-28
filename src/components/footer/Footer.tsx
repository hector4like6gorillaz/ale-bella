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
      { name: 'Influencers', link: '' },
      { name: 'Locations', link: '' },
    ],
  },
  {
    title: 'Services',
    options: [
      { name: 'Branding', link: '' },
      { name: 'Social Media', link: '' },
      { name: 'Creative Production', link: '' },
    ],
  },
  {
    title: 'About',
    options: [
      { name: 'Our Team', link: '' },
      { name: 'Culture', link: '' },
      { name: 'Careers', link: '' },
    ],
  },
  {
    title: 'Clients',
    options: [
      { name: 'Jose Ole', link: '' },
      { name: 'La Brea Bakery', link: '' },
    ],
  },
  {
    title: 'Insights',
    options: [
      { name: 'Blog', link: '' },
      { name: 'Digital Grocery', link: '' },
      { name: 'Influencers', link: '' },
    ],
  },
]
const Footer = () => {
  return (
    <div className={`${style['footer-container']}`}>
      <div className={`${style['div-all-top-container']}`}>
        <div className={`${style['div-left-container']}`}>
          <div className={`${style['logo-footer-container']}`}>
            <img className={`${style['logo-footer']}`} src={logo} />
          </div>
          <p className={`${style['p-stay']}`}>Stay in the Loop</p>
          <p>
            Get occasional updates about our insights,
            <br /> content, news, and events.
          </p>
          <Input placeHolder='Email' Icon={ArrowRightIcon} onClick={() => console.log('Holo')} />
          <div>
            <p className={`${style['p-small']}`}>
              You'll receive emails about C/C/G news, and free marketing resources.
            </p>
            <p className={`${style['p-small']}`}>
              You can unsubscribe from these communications at any time
            </p>
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
          © 2021 C/C/G. All rights reserved. Made with LOVE in Los Angeles, California
        </p>
      </div>
    </div>
  )
}

export default Footer