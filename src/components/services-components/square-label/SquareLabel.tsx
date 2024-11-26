import style from './square.module.scss'

const SquareLabel = ({
  label = 'Ale-Bella is a dynamic, full-service creative agency based in Los Angeles, dedicated to helping forward-thinking brands elevate their digital presence. We specialize in crafting standout visual content, developing powerful branding strategies, and executing comprehensive digital marketing campaigns that drive results across key platforms. With deep expertise in e-commerce, tech startups, fashion, and social media, our success is rooted in a blend of creativity and strategic know-how, empowering our clients to stand out in a crowded digital landscape.',
}: {
  label?: string
}) => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-square']}`}>
        <div className={`${style['square-show']}`}>
          <p className={`${style['p-label']}`}>{label} </p>
        </div>
      </div>
    </div>
  )
}

export default SquareLabel
