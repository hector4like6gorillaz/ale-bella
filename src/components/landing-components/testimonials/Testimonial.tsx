import { ChevronRightIcon } from '@heroicons/react/24/outline'
import style from './testi.module.scss'
import { Fragment, useEffect, useState } from 'react'

const dataInTestimonial = [
  {
    text: 'Working with Ale-Bella made such a change for my business. They took the time to understand my brand and crafted a marketing strategy that truly resonated with my target audience. The results were beyond my expectations.',
    autor: '- Jane D. - Business Owner',
  },
  {
    text: "The team at Ale-Bella is incredibly knowledgeable and dedicated. They helped optimize my online store and implemented effective advertising campaigns that drove traffic and boosted conversions. I'm thrilled with the results and highly recommend working with them.",
    autor: '- Mark S - E-commerce Entrepreneur',
  },
  {
    text: 'From day one, Ale-Bella impressed us with their innovative ideas and strategic thinking. They helped us establish our brand in a competitive market and provided ongoing support that has been invaluable. Highly recommend!',
    autor: '- Tom W. - Tech Start-Up Founder ',
  },
  {
    text: "The marketing strategies Ale-Bella implemented for my restaurant transformed our foot traffic and online presence. Their attention to detail and commitment to our success is commendable. I can't thank them enough!",
    autor: '- Sarah M. - Restaurant Owner',
  },
]

const Testimonial = () => {
  const [position, setposition] = useState(0)
  const [next, setnext] = useState(false)
  const [labelsCenter, setlabelsCenter] = useState(dataInTestimonial[0])
  const [labelsRight, setlabelsRight] = useState(dataInTestimonial[0])

  const getLabelRight = () => {
    let label = ``
    if (next) {
      label = `${style['div-container-info-right-move']}`
    }
    return label
  }
  const getLabelCenter = () => {
    let label = ``
    if (next) {
      label = `${style['div-container-info-move']}`
    }
    return label
  }

  useEffect(() => {
    if (next) {
      if (position + 1 > dataInTestimonial.length - 1) {
        setposition(0)
        setlabelsRight(dataInTestimonial[0])
      } else {
        setposition(position + 1)
        setlabelsRight(dataInTestimonial[position + 1])
      }

      setTimeout(() => {
        if (position + 1 > dataInTestimonial.length - 1) {
          setlabelsCenter(dataInTestimonial[0])
        } else {
          setlabelsCenter(dataInTestimonial[position + 1])
        }
        setnext(false)
      }, 1010)
    }

    return () => {}
  }, [next])

  useEffect(() => {
    if (dataInTestimonial.length > 1) {
      setlabelsRight(dataInTestimonial[1])
    }
  }, [])

  return (
    <div className={`${style['big-container']}`}>
      <div className={`${style['container-testimonials']}`}>
        <div className={`${style['div-container-info']} ${getLabelCenter()}`}>
          <h2 className={`${style['h2-title']}`}>Testimonials</h2>
          <p className={`${style['p-content']}`}>{labelsCenter.text}</p>
          <p className={`${style['p-name']}`}>{labelsCenter.autor} </p>
        </div>

        <div className={`${style['div-container-info-right']} ${getLabelRight()}`}>
          <h2 className={`${style['h2-title']}`}>Testimonials</h2>
          <p className={`${style['p-content']}`}>{labelsRight.text}</p>
          <p className={`${style['p-name']}`}>{labelsRight.autor} </p>
        </div>

        {/* botones y cositos */}
        <div className={`${style['chevron-right']}`} onClick={() => setnext(!next)}>
          <ChevronRightIcon className={`${style['icon-chevron']}`} />
        </div>
        <div className={`${style['marks-bottom']}`}>
          {dataInTestimonial.map((_, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`${style['mark']} ${position === index && style['mark-selected']}`}
                ></div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
