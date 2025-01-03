const AleSVG = ({ className, onClick }: { className: string; onClick?: () => void }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='black'
      viewBox='0 0 2000 2000'
      stroke='black'
      onClick={() => onClick && onClick()}
      className={className}
    >
      <path
        transform='translate(786,655)'
        d='m0 0h9l4 2-1 6-11 23-8 16-12 25-15 33-16 34-15 33-16 34-11 24-18 39-7 16-7 15-12 26-9 22v3l37 1 2-6 19-45 10-24 3-4h8l3 1 1 3-9 24-18 43-3 8 161 3 77 3 11 1 4 2 1 3-2 3-4 1-60-3-114-3h-78l-8 20-11 30-6 18-2 12 2 5 3 2 9-1 16-8 10-7 12-18 11-9 11-5 10-2h15l6 5 1 2v6l-6 9-7 6-8 3-25 1-2 2v9l5 5 6 2h13l11-3 10-5 12-9 14-12 4-1 1 1-1 7-6 8-10 9-12 8-12 5-16 3-16-1-11-4-5-5-2-6-9 5-10 6-9 4-9 2h-10l-5-3-4-5-2-6v-14l4-17 8-23 13-31-39 1-7 14-15 37-16 38-7 20-7 23-4 19-1 8v10l4 8 3 7-1 1h-11l-6-3-3-4-2-8v-15l5-27 8-25 12-31 12-29 11-27 5-13 1-4-35 1-9 1-8 7-12 15-11 14-8 10-9 11-11 13-14 15-9 11-15 16-9 10-7 7-8 7-11 11-11 9-14 12-20 15-17 13-24 15-22 13-26 12-30 10-22 5-20 3-11 1h-38l-24-3-26-6-22-8-23-11-16-10-10-8-10-9-9-12-8-17-2-8-1-12 2-14 4-12 7-13 8-10 12-12 16-12 21-12 22-11 25-10 36-12 29-8 36-8 50-9 56-7 40-4 61-4 83-3 11-1 6-3 9-10 13-19 11-15 13-19 12-17 10-15 12-19 14-21 11-17 13-20 14-22 10-16 13-21 16-26 17-28 11-18 12-20 11-20zm-82 164-4 5-15 23-9 14-16 25-20 30-11 16-9 13-8 12-16 23-15 22-2 5 2 1h29l9-2 5-5 5-9 13-28 16-36 19-41 13-29 13-31 2-8zm-172 200-78 3-33 2-82 8-41 6-42 7-35 8-40 11-36 13-33 16-21 13-14 11-12 12-9 14-5 13-1 4v20l4 13 7 12 11 13 12 10 18 11 17 9 24 9 26 6 15 2 14 1h24l17-2 23-5 20-6 20-8 17-8 25-15 16-11 23-16 10-8 28-24 11-10 8-7 28-28 7-8 11-12 9-11 13-15 11-14 11-13 7-9 8-11 2-5-1-1zm214 44-14 7-2 2 1 4 3 1h9l6-3 4-5v-5l-1-1z'
      />
      <path
        transform='translate(1424,760)'
        d='m0 0h72l25 2 30 5 22 7 12 5 11 8 6 7 3 6 1 8-3 10-7 10-7 7-15 10-38 19-43 18-41 16-35 13-42 15-171 57-8 4-4 7-1 6 35 2 52 5 29 4 27 6 24 7 20 8 16 9 10 10 5 10 1 4v9l-4 13-7 12-10 11-7 8-10 9-16 12-13 9-25 15-62 31 4 2 104 1 74 2 79 3 72 4 92 7 114 10 56 7 4 2 1 3-4 3-18-1-82-8-100-8-85-5-81-4-119-3h-141l-15 2-21 6-27 9-36 10-44 10-47 8-42 5-16 1h-39l-19-3-8-4-4-5 1-5 2-4 9-6 13-5 26-6 41-7 58-7 48-4 45-3 43-2 19-3 16-6 33-14 25-12 21-11 20-12 16-11 10-8 14-12 7-7 8-11 5-10 2-12-2-8-4-7-7-7-10-6-24-9-20-6-29-6-45-6-39-3-27-1-2 5-11 20-11 23-29 58-11 23-15 30-5 6-9-1-2-3 10-24 8-16 32-68 14-29 8-18 2-6-16-1-10-2-3-3v-6l5-5 23-9 15-6 5-4 8-14 15-28 13-25 12-22 10-19 5-9 2-1h8l4 2-2 9-7 16-8 16-22 43-10 19-3 7 29-9 109-36 64-23 46-17 31-12 27-11 15-7 23-11 15-9 10-7 8-8 3-7v-9l-6-9-10-7-14-6-25-6-30-4-33-2h-19l-46 2-32 3-53 7-45 9-39 9-54 16-25 9-45 18-46 23-6 1-4-3 1-4 10-7 18-10 37-16 27-11 36-12 29-9 35-9 36-8 33-6 42-6 43-4zm-261 236v2l6 1 1-3zm-18 216-61 4-50 5-33 4-38 7-22 6-10 5 2 4 9 2 9 1h30l44-5 38-6 43-9 45-12 9-4-1-2z'
      />
      <path
        transform='translate(1576,928)'
        d='m0 0h8l3 1 1 3-7 19-17 41-16 40-13 35-6 18-2 11 3 7 2 1 9-1 16-8 13-9 7-7 11-31 13-31 13-30 15-36 8-19 3-4h8l3 1 1 3-7 19-17 41-16 40-13 35-7 22-1 7 3 7 2 1 9-1 16-8 10-7 12-13 7-8 12-9 10-6 11-4h13l6 5 1 2v7l-3 3-7-2-2-2h-8l-11 7-7 6h-2v2l-5 5-10 16-1 3 8-2 11-8 11-10 11-8 6-1 6 2-1 13-1 11 1 2h8l8-4 13-11 7-7 5-1 2 4-3 7-8 9-11 8-9 4-10 2-10-1-5-5-2-3-1-7-8 6-11 8-9 3-6 1h-10l-7-3-3-7-15 9-12 4-5 1h-10l-5-3-4-5-2-5v-11l-11 9-10 7-13 6-10 2h-9l-5-2-5-8-1-3v-10l-6 4-11 8-12 6-11 3-7 1h-11l-13-3-9-6-3-6v-12l4-9 6-9 8-7 14-7 10-2h14l5 3 3 4v6l-6 9-6 5-9 4-11 1h-14l-2 3v8l5 5 6 2h13l11-3 10-5 11-8 10-9 4-5 9-26 13-31 13-30 15-36 8-19zm-106 135-14 7-2 2 1 4 6 2 9-2 4-2 3-4v-6l-1-1z'
      />
      <path
        transform='translate(849,1071)'
        d='m0 0h31l14 1 1 4-4 8-1 1-12 1h-37l-29-2-8-1 1-6 3-3 3-1z'
      />
      <path
        transform='translate(1219,1305)'
        d='m0 0 10 1 6 4 5 6 3 8-2 12-7 8-6 3-9 1-8-2-7-5-4-8v-13l5-8 6-5zm-3 7-5 3-4 6v11l4 6 5 3h10l6-4 3-5v-10l-3-6-6-4z'
      />
      <path
        transform='translate(1133,1305)'
        d='m0 0h6v18h20l1-16 1-2h6v42l-5 1-2-1v-17h-21v17l-4 1-3-2v-39z'
      />
      <path
        transform='translate(1334,1305)'
        d='m0 0h12l10 2 4 4 1 3v10l-3 5-5 3-12 2v12l-2 2-5-1-1-13v-27zm7 6-1 1v13l3 2 9-2 2-3v-6l-4-4z'
      />
      <path
        transform='translate(1508,1305)'
        d='m0 0 3 1 6 16 9 22v4l-6-1-3-4-3-5-13 1-5 8-5 1-1-3 12-28zm0 15-4 6-1 6h10l-1-5-3-7z'
      />
      <path
        transform='translate(1288,1305)'
        d='m0 0 9 1 4 4-1 3-7-1h-8l-1 1v6l14 8 3 4v9l-6 7-3 1h-9l-8-3-2-4 1-1 16 1 3-3-1-5-5-3-8-5-3-4-1-5 2-6 6-4z'
      />
      <path
        transform='translate(1717,1304)'
        d='m0 0 5 1 4 5 7 14 4-4 7-13 4-3h4l-1 6-12 22-1 3-1 12-5 1-2-7-1-8-13-26z'
      />
      <path transform='translate(1557,1305)' d='m0 0h7l1 1v35h20l2 5-1 1-14 1h-13l-2-2z' />
      <path transform='translate(1659,1305)' d='m0 0h26l2 3-2 3-10 1v35l-6 1-1-1v-35l-10-1-1-5z' />
      <path
        transform='translate(1433,1305)'
        d='m0 0h27l1 5-1 1-10 2v28l-1 1h-5l-1-1v-29l-10-1-1-5z'
      />
      <path transform='translate(1394,1305)' d='m0 0h6l1 1v41l-4 1-4-2v-40z' />
      <path transform='translate(1619,1305)' d='m0 0h6l1 1v41l-1 1h-5l-1-1z' />
    </svg>
  )
}

export default AleSVG
