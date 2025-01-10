import style from './carousel.module.scss'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import ho1 from 'src/assets/carousel/hotel1.jpg'
import ho2 from 'src/assets/carousel/hotel2.jpg'
import ho3 from 'src/assets/carousel/hotel3.jpg'
import ho4 from 'src/assets/carousel/hotel4.webp'

/*
Branding
Shopify websites
Design services
Email marketing and automation
Paid media & advertising
Social media management
Packing
*/
const carouselInfo = [
  {
    alt: 'slide 1',
    title: 'BRANDING',
    content:
      'This game-changing process begins with a two-week planning phase that includes a brand questionnaire, brainstorming sessions, market research, and the development of at least two branding concepts aligned with your business strategy, and of course, we believe in offering multiple options. Once a concept is selected, we dive into the design phase, with deliverables presented via video calls. All designs are shared through links with built-in commenting tools, and we incorporate thoughtful rounds of client feedback into every step of the process.',
    image: ho1,
  },
  {
    alt: 'slide 2',
    title: 'WEBSITE',
    content:
      'Our web design services, focused on both visuals and conversions, kick off with a two-week planning phase that includes a website questionnaire, UX research, content strategy, brainstorming, and the creation of at least two website design concepts. Once a concept is finalized, we move forward with desktop and mobile page designs in stages, presenting them via video calls. All designs are shared through links with commenting tools, and every page, view, and hover state goes through multiple rounds of thoughtful client feedback. After final approval, we’ll brief your web developer and assist with QA to ensure everything runs smoothly.',
    image: ho3,
  },
  {
    alt: 'slide 3',
    title: 'PACKAGING DESIGN',
    content:
      'This eye-catching packaging design project begins with a two-week planning phase that includes a product questionnaire, messaging strategy, brainstorming, research, and the development of at least two packaging concepts based on your business goals. Once a concept is chosen, we proceed to the design phase, presenting deliverables through video calls. All designs are shared via links with built-in commenting tools. Once everything is approved, we’ll liaise with your printer and assist with packaging proofs for final approval.',
    image: ho2,
  },
  {
    alt: 'slide 4',
    title: 'DESIGN SERVICES',
    content:
      "We’re open to taking on a wide variety of projects that align with our expertise, but we also know where to set boundaries. Whether it's the usual work like social media campaigns or more unexpected projects, we’re confident in handling a diverse range of deliverables. We pride ourselves on our flexibility, but we also ensure we stay within our wheelhouse to deliver the best results. From everyday tasks to unique, out-of-the-box requests, we know what we do best.",
    image: ho4,
  },
  {
    alt: 'slide 5',
    title: 'EMAIL MARKETING & AUTOMATION',
    content:
      "Our process starts with a discovery phase, gathering key insights through a questionnaire, audience research, and content planning. This helps us design email templates that align with your brand and audience, we focus on aesthetics and conversion, ensuring responsive designs that work seamlessly on desktop and mobile (with a strong emphasis on mobile, as it drives much of our clients' email traffic). Once automation is set up, we ensure smooth integration and offer ongoing support with optimizations and A/B testing to keep your campaigns performing at their best.",
    image: ho4,
  },
  {
    alt: 'slide 6',
    title: 'PAID MEDIA & ADVERTISING',
    content:
      "Our paid media services begin with a strategic planning phase, where we align your goals and audience insights to create a tailored advertising plan. We design targeted ads for search and social campaigns, focusing on conversion and ROI. Once approved, we launch across Google, Facebook, and Instagram, ensuring ads are optimized for both desktop and mobile. We present the setup and creatives via video calls, refining them based on your feedback. After launch, we continuously monitor and optimize the campaign, running A/B tests and adjusting targeting to maximize performance. You'll have full access to analytics, with ongoing support to keep your campaigns on track and delivering results.",
    image: ho4,
  },
  {
    alt: 'slide 7',
    title: 'SOCIAL MEDIA MARKETING & MANAGEMENT',
    content:
      'We begin with a two-week strategy phase, aligning your brand goals and audience to create a custom plan. Once approved, we design engaging content, visuals, copy, or videos, optimized for desktop and mobile. We share content calendars and creatives, refining them based on your feedback. You’ll get regular performance reports, tracking engagement, impressions, and conversions. After launch, we continuously optimize the strategy to maximize results and keep your social presence aligned with your goals.',
    image: ho4,
  },
]

const MyCustomCarousel = () => {
  return (
    <div className={`${style['carousel-container-big']}`}>
      <CCarousel controls indicators>
        {carouselInfo.map((item, _) => {
          const { alt, content, image, title } = item
          return (
            <CCarouselItem key={alt}>
              <div className={`${style['div-container-img']}`}>
                <CImage className={`${style['img-props']}`} src={image} alt={alt} />
                <div className={`${style['back-black']}`}>
                  <div className={`${style['content-carousel']}`}>
                    <p className={`${style['p-title']}`}>{title} </p>
                    <p className={`${style['p-description']}`}>{content}</p>
                  </div>
                </div>
              </div>
            </CCarouselItem>
          )
        })}
      </CCarousel>
    </div>
  )
}

export default MyCustomCarousel
