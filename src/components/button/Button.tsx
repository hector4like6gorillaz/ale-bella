import style from './button.module.scss'

const Button = ({
  label,
  theme = 'primary',
  onClick,
  rounded = false,
  size = 'm',
}: {
  label?: string
  theme?: 'primary' | 'secondary'
  rounded?: boolean
  size?: 'm' | 's'
  onClick?: () => void
}) => {
  const getTheme = () => {
    let clas = ''
    switch (theme) {
      case 'primary':
        clas = `${style['theme-primary']} ${rounded && style['theme-rounded']}`
        break
      case 'secondary':
        clas = `${style['theme-secondary']} ${rounded && style['theme-rounded']}`
        break

      default:
        break
    }
    return clas
  }
  return (
    <button
      className={`${style['button-container']} ${
        size === 'm' ? style['size-m'] : style['size-s']
      } ${getTheme()}`}
      onClick={() => onClick && onClick()}
    >
      {label ? label : 'vacio'}
    </button>
  )
}

export default Button
