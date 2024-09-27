import style from './cardC.module.scss'

const CardChallenge = ({
  content,
}: {
  content: { title: string; subtitle: string; img: string }
}) => {
  return (
    <div className={`${style['card-challenge-container']}`}>
      <div className={`${style['img-div']}`}>
        <img className={`${style['img']}`} src={content.img} />
      </div>
      <div className={`${style['div-info']}`}>
        <p className={`${style['card-title']}`}>{content.title} </p>
        <p className={`${style['card-subtitle']}`}>{content.subtitle} </p>
      </div>
    </div>
  )
}

export default CardChallenge
