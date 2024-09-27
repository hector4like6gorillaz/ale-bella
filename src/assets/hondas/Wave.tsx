const Wave = ({ className, color = '#ffffff' }: { className: string; color?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 1440 320'
      className={className}
      stroke='transparent'
    >
      <g>
        <path fill={color} fillOpacity='1' d='M0,304L3540,32L1440,320L0,320Z'></path>
      </g>
    </svg>
  )
}

export default Wave
