import { Fragment } from 'react'
import style from './card.module.scss'

const WhatCard = ({ Icon, contain, title }: { Icon: any; title: string; contain: string[] }) => {
  return (
    <div className={`${style['card-container']}`}>
      <Icon className={`${style['icon-config']}`} />
      <h4 className={`${style['h4-title']}`}>{title} </h4>

      {contain.map((item, index) => {
        return (
          <Fragment key={item + index}>
            <p className={`${style['p-content']}`}>- {item}</p>
          </Fragment>
        )
      })}
    </div>
  )
}

export default WhatCard
