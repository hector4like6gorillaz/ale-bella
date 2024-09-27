import style from './button.module.scss'

const Button = ({
  label,
  theme = 'primary',
  onClick,
}: {
  label?: string
  theme?: 'primary' | 'secondary'
  onClick?: () => void
}) => {
  const getTheme = () => {
    let clas = ''
    switch (theme) {
      case 'primary':
        clas = `${style['theme-primary']}`
        break
      case 'secondary':
        clas = `${style['theme-secondary']}`
        break

      default:
        break
    }
    return clas
  }
  return (
    <button
      className={`${style['button-container']} ${getTheme()}`}
      onClick={() => onClick && onClick()}
    >
      {label ? label : 'vacio'}
    </button>
  )
}

export default Button
