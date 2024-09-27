import style from './testi.module.scss'

const Testimonial = () => {
  return (
    <div className={`${style['container-testimonials']}`}>
      <div className={`${style['div-container-info']}`}>
        <h2 className={`${style['h2-title']}`}>Testimonials</h2>
        <p className={`${style['p-content']}`}>
          These guys are the real deal. C/C/G has been instrumental in helping our ongoing marketing
          and social media needs. The engagement continues to grow and we’re seeing increased sales
          through digital marketing campaigns.
        </p>
        <p className={`${style['p-name']}`}>- James Masi, Annapurna Interactive</p>
      </div>
    </div>
  )
}

export default Testimonial
