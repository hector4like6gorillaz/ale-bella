import style from './input.module.scss'

const Input = ({
  placeHolder = 'vacio',
  onClick,
  Icon,
  type = 'text',
}: {
  placeHolder?: string
  onClick?: () => void
  Icon?: any
  type?: string
}) => {
  return (
    <div className={`${style['div-container']}`}>
      <input type={type} className={`${style['input-clas']}`} placeholder={placeHolder} />
      {Icon && <Icon className={`${style['icon-props']}`} onClick={() => onClick && onClick()} />}
    </div>
  )
}

export default Input
