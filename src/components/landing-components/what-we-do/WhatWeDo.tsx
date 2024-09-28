import { Fragment } from 'react'
import WhatCard from './card/WhatCard'
import style from './what.module.scss'
import {
  BuildingLibraryIcon,
  DeviceTabletIcon,
  LightBulbIcon,
  EyeDropperIcon,
} from '@heroicons/react/24/outline'
import Button from 'src/components/button/Button'

const cards = [
  {
    icon: BuildingLibraryIcon,
    title: 'Social Media',
    contain:
      'Expand the reach of consumer packaged good brands to transform content into customers. Build a connection that spans devices and delivers results.',
  },
  {
    icon: DeviceTabletIcon,
    title: 'Paid Media',
    contain:
      'From the tried and true social media platforms to the newest to launch, we build digital social experiences that will connect and captivate consumers for the entire journey.',
  },
  {
    icon: LightBulbIcon,
    title: 'Branding & Communication',
    contain:
      "We help clients develop a clear point of view, distinct voice, and unique visual identity that unifies their brand and stands out in consumers' minds.",
  },
  {
    icon: EyeDropperIcon,
    title: 'Content Creation',
    contain:
      'We will handle the content pipeline from start to finish with all the tools, from a custom studio to a lengthy list of curated influencers. Starting with concept design and creative execution, we will create top-performing content tailored to your brand and each platform.',
  },
]

const WhatWeDo = () => {
  return (
    <div className ={`${style['big-container']}`}>
      <div className={`${style['container-we-do']}`}>
        <p className={`${style['p-title']}`}>What We Do</p>
        <p className={`${style['p-content']}`}>
          We optimize the presence of your business across all platforms to connect with customers
          and drive exceptional growth.
        </p>
        <div className={`${style['sizedbox-heigth']}`}></div>
        <div className={`${style['cards-square']}`}>
          {cards.map((item, index) => {
            return (
              <Fragment key={index + item.contain}>
                <WhatCard title={item.title} Icon={item.icon} contain={item.contain} />
              </Fragment>
            )
          })}
        </div>
        <div className={`${style['div-container-center-button']}`}>
          <Button label="Let's chat" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
