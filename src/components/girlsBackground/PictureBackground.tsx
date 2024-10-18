import style from './picture.module.scss'

const PictureBackground = ({ backImg }: { backImg: string }) => {
  return (
    <div className={`${style['div-backgroun-img']}`}>
      <img className={`${style['img-properties']}`} src={backImg} />
    </div>
  )
}

export default PictureBackground
