import AleSVG from 'src/assets/logos/ale'
import style from './nav.module.scss'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const NavBarFinal = () => {
  const navigate = useNavigate()
  return (
    <div className={`${style['container-nav-final']}`}>
      <AleSVG onClick={() => navigate('/')} className={style['svg-logo']} />

      <div className={`${style['container-nav-right']}`}>
        <p className={`${style['p-navbar']}`}>Digital marketing agency</p>
        <div className={`${style['circle-black']}`}></div>
        <p
          onClick={() => navigate('/services')}
          className={`${style['p-navbar']} ${style['cursor-pointer']}`}
        >
          Services
        </p>
        <Button
          onClick={() => navigate('/services')}
          size='s'
          label='Contact Us'
          theme='secondary'
          rounded
        />
      </div>
      <div className={`${style['container-nav-right-movile']}`}>
        {/*
        <p
          onClick={() => navigate('/services')}
          className={`${style['p-navbar']} ${style['cursor-pointer']}`}
        >
          Services
        </p>
         */}
        <Button
          onClick={() => navigate('/services')}
          size='s'
          label='Contact Us'
          theme='secondary'
          rounded
        />
      </div>
    </div>
  )
}

export default NavBarFinal
