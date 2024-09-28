import Input from 'src/components/input/Input'
import style from './contact.module.scss'
import kid from 'src/assets/kid.png'
import Button from 'src/components/button/Button'

const Contact = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-contact']}`}>
        <div className={`${style['cuestionaire-left']}`}>
          <h3 className={`${style['h3-title']}`}>Let's Talk.</h3>
          <p className={`${style['p-content']}`}>
            Ready to accelerate your company's growth?
            <br />
            Find out how we help brands conquer their goals.
          </p>
          <div className={`${style['div-flex-3-contact']}`}>
            <Input placeHolder='First Name' />
            <Input placeHolder='Email' />
            <Input placeHolder='Phone Number' type='number' />
          </div>
          <div className={`${style['div-flex-3-contact']}`}>
            <Input placeHolder='Website' />
            <Input placeHolder='Choose' />
          </div>
          <div>
            <Button label='Submit' />
          </div>
        </div>
        <div className={`${style['div-img-container']}`}>
          <img src={kid} className={`${style['img']}`} />
        </div>
      </div>
    </div>
  )
}

export default Contact
