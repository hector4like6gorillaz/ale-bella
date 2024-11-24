import style from './anounce.module.scss'

const Anounce = ({
  text = 'ESTE ES UN TEXTO DE EJEMPLO PARA VISUALIZAR EL FUNCIONAMIENTO',
}: {
  text?: string
}) => {
  return (
    <div className={`${style['anounce-container']}`}>
      <div className={`${style['p-div-anounce']}`}>
        <p className={`${style['p-text-anounce']}`}>{text} </p>
      </div>
    </div>
  )
}

export default Anounce
