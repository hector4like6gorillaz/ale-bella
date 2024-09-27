import { Fragment } from 'react'
import style from './options.module.scss'

const OptionsFooter = ({
  title,
  options,
}: {
  title: String
  options: { name: String; link: String }[]
}) => {
  return (
    <div className={`${style['option-container']}`}>
      <p className={`${style['p-title']}`}>{title} </p>
      <div className={`${style['p-option-container']}`}>
        {options.map((item, _) => {
          return (
            <Fragment key={`${item.name}  ${item.link}`}>
              <p className={`${style['p-option']}`}>{item.name} </p>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default OptionsFooter
