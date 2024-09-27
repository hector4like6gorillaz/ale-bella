import style from './card.module.scss'

const WhatCard = ({ Icon, title, contain }: { Icon: any; title: string; contain: string }) => {
  return (
    <div className={`${style['card-container']}`}>
      <Icon className={`${style['icon-config']}`} />
      <h4 className={`${style['h4-title']}`}>{title} </h4>
      <p className={`${style['p-content']}`}>{contain}</p>
    </div>
  )
}

export default WhatCard
