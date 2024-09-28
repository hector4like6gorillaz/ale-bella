import { Fragment } from 'react'
import style from './navbar.module.scss'
import Button from '../button/Button'
import logo from 'src/assets/logos/ale-logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Work', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Insignts', link: '/' },
  ]

  return (
    <div className ={`${style['big-container']}`}>
      <div className={`${style['container-navbar']}`}>
        <div className={`${style['img-logo-container']}`}>
          <img src={logo} className={`${style['img-logo']}`} />
        </div>
        <div className={`${style['container-options-menu']}`}>
          {menu.map((item, index) => {
            return (
              <Fragment key={index}>
                <p className={`${style['p-menu-option']}`}>{item.name} </p>
              </Fragment>
            )
          })}
          <Button label='Contact Us' theme='secondary' />
        </div>
        <div className={`${style['burguer-div']}`}>
          <Bars3Icon className={`${style['icon-bars']}`} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
