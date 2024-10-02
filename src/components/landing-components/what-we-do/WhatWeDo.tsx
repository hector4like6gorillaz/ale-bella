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
    contain: [
      'Build or enhance your social media from the ground up.',
      'Fully managed by our in-house team.',
      'Designed to deeply engage and grow your audience.',
    ],
  },
  {
    icon: DeviceTabletIcon,
    title: 'Content Creation',
    contain: [
      'Create captivating content that drives interest and conversions.',
      'Managed entirely by our creative professionals.',
      'Aimed to tell your brand’s story in a compelling way.',
    ],
  },
  {
    icon: LightBulbIcon,
    title: 'Branding & Communication',
    contain: [
      'Develop targeted email campaigns that resonate with your audience.',
      'Leveraged by AI for enhanced engagement and relevance.',
      'Crafted to seamlessly integrate with broader marketing goals.',
    ],
  },
  {
    icon: EyeDropperIcon,
    title: 'Website Development',
    contain: [
      'Develop intuitive, AI-driven websites tailored for both users and your team.',
      'Optimized for performance and aligned with your business needs.',
      'Ensure a smooth and engaging online experience for all visitors.',
    ],
  },
  {
    icon: LightBulbIcon,
    title: 'SEO (Search Engine Optimization)',
    contain: [
      'Boost your visibility in search engine results.',
      'Utilize AI-driven strategies for sustainable growth.',
      'Focus on delivering long-term value and visibility.',
    ],
  },
  {
    icon: EyeDropperIcon,
    title: 'Paid Advertising',
    contain: [
      'Execute highly targeted ad campaigns optimized by AI.',
      'Achieve superior ROI through precise, data-driven strategies.',
      'Customized to meet your specific market and business goals.',
    ],
  },
  {
    icon: LightBulbIcon,
    title: 'Online Reputation Management',
    contain: [
      'Employ AI to proactively manage and safeguard your online reputation.',
      'Transform insights into actionable strategies to enhance your public image.',
      'Continuously monitor and respond to the digital landscape.',
    ],
  },
  {
    icon: EyeDropperIcon,
    title: 'Analytics and Data Analysis',
    contain: [
      'Utilize AI-enhanced tools to gain precise insights into performance and ROI.',
      'Understand customer behavior and predict trends.',
      'Continuously refine and optimize your strategies based on solid data.',
    ],
  },
]

const WhatWeDo = () => {
  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-we-do']}`}>
        <p className={`${style['p-title']}`}>Services</p>
        <p className={`${style['p-content']}`}>
          We optimize the presence of your business across all platforms to connect with customers
          and drive exceptional growth.
        </p>
        <div className={`${style['sizedbox-heigth']}`}></div>
        <div className={`${style['cards-square']}`}>
          {cards.map((item, index) => {
            return (
              <Fragment key={index + item.contain.join()}>
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
