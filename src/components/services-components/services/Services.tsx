import { Fragment } from 'react'
import style from './services.module.scss'
import { ChevronDoubleDownIcon, MinusIcon } from '@heroicons/react/24/outline'

const Services = () => {
  const servicesInfo = [
    {
      title: 'Branding',
      content: [
        'Brand Guidelines',
        'Print and Digital Applications',
        'Photography Guidelines',
        'Website Style Guide',
        'Logo Design',
        'Brand Naming',
        'Custom Graphics',
        'Fonts + Color Palette',
      ],
    },
    {
      title: 'Shopify Websites',
      content: [
        'Desktop / Mobile Website Designs',
        'Custom / Theme Based Websites',
        'Graphics',
        'Website Style Guide',
      ],
    },
    {
      title: 'Design Services',
      content: [
        'Social media',
        'Email Marketing',
        'Graphics',
        'Textiles + Patterns',
        'Prints',
        'Merchandise',
        'Presentations',
        'Print Collateral',
      ],
    },
    {
      title: 'Email Marketing & Automation',
      content: [
        'Email Campaign Management',
        'Automated Email Sequences',
        'List Segmentation & Personalization',
        'A/B Testing & Optimization',
      ],
    },

    {
      title: 'Paid Media & Advertising',
      content: [
        'Google Ads',
        'Social Media Advertising (Facebook, Instagram, TikTok, Pinterest, etc.)',
        'Affiliate Marketing: Developing and managing affiliate programs to leverage third-party influencers and websites',
      ],
    },
    {
      title: 'Social Media Marketing & Management',
      content: [
        'Social Media Strategy',
        'Social Media Management (Facebook, Instagram, TikTok, etc.)',
        'Community Management',
        'Influencer Partnerships & Collaborations',
      ],
    },
    {
      title: 'Packaging',
      content: ['Packaging Design', '3D Design', 'Packaging Mockups', 'Print Ready Dielines'],
    },
  ]
  return (
    <div className={`${style['big-container-services']}`}>
      <h1 className={`${style['h1-title']}`}>Services</h1>
      <div className={`${style['services-container']}`}>
        {servicesInfo.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className={`${style['service-information']}`}>
                <p className={`${style['p-title']}`}>{item.title} </p>
                {item.content.map((it, _) => {
                  return (
                    <Fragment>
                      <div className={`${style['div-icon-content']}`}>
                        <p className={`${style['p-content']}`}>{it} </p>
                      </div>
                    </Fragment>
                  )
                })}
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Services
