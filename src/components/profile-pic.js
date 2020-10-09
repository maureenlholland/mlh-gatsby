import React, { useState } from "react"

const ProfilePic = () => {
  const [skinColor, setSkinColor] = useState(false)
  const [hairColor, setHairColor] = useState(false)
  const [shadowColor, setShadowColor] = useState(false)
  const [mouthColor, setMouthColor] = useState(false)
  const [eyeColor, setEyeColor] = useState(false)
  // need to set refs on groups
  // click event listeners toggle data-colors attribute

  return (
    <svg
      title="Maureen Holland"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 50 200 250"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        id="bun"
        data-colors={hairColor}
        onClick={() => setHairColor(!hairColor)}
      >
        <circle className="b" cx="97.96" cy="205.34" r="25.63" />
        <circle className="c" cx="97.96" cy="205.34" r="25.63" />
      </g>
      <g
        id="skin"
        data-colors={skinColor}
        onClick={() => setSkinColor(!skinColor)}
      >
        <path
          className="d"
          d="M233,275.52c-.23-6.7-7.91-7.22-10.88-8.22-1.18-.39-2.43-1.84-3.51-3.44-6.3-2.1-12.25-4.95-14-7.89-2.39-4.09-6.35-11.57-8.11-18.13,6.06-12.78,9.08-28.82,8.18-46.12C209,189.52,216,173.18,216,165.8c0-10.08,2.16-21.19-4.38-18.69a4,4,0,0,0-1.55,1.26,93.72,93.72,0,0,0-5.66-26.65c-14.89-40.33-53.62-63.19-86.52-51a52.22,52.22,0,0,0-13.3,7.26c-25.17,13.75-39.07,45.77-32,78.82A82.46,82.46,0,0,0,77,170.94c-1.85-.43-3.32-.42-4.08.1-4.77,3.26-.85,9.37,4.18,19.9s15.74,21.82,19,20.26c.91-.43,1.61-1.81,2-3.79a106.9,106.9,0,0,0,14.41,31.18c.78,5.22,2.31,17.23,1,23.44-1.26,5.78-8,11.83-16,17.22l-1.09.23a4.31,4.31,0,0,1-1.8,2c-1.86.93-11,5.84-12.17,7.89a8.6,8.6,0,0,0-.61,7.38l148.65.47C231.59,290.11,233.13,279.73,233,275.52Z"
        />
        <path
          className="g"
          d="M181.59,262.27c1.47-3.82,2.91-7.62,4.56-11.33-5.05,5.47-10.3,11.52-17.52,13.64-20.8,6.12-40.24-11.64-56.11-26,.71,5.9,2,18.7,1,23.44-1.26,5.78-8,11.83-16,17.22l-1.09.23a4.31,4.31,0,0,1-1.8,2c-1.86.93-11,5.84-12.17,7.89a8.6,8.6,0,0,0-.61,7.38l89.3.28C172,284.85,177.24,273.56,181.59,262.27Z"
        />
        <path
          className="g"
          d="M146.65,216.76l9,2.33s.06-2.24-3.22-2.63A17.21,17.21,0,0,0,146.65,216.76Z"
        />
      </g>
      <g
        id="hair"
        data-colors={hairColor}
        onClick={() => setHairColor(!hairColor)}
      >
        <path
          className="b"
          d="M153.76,105.16c5.34,3.42,42.3,18.64,44.92,27.71s3.69,27.57,6.32,31c1.85,2.4,3.91-9.37,5-16.57a94,94,0,0,0-5.57-25.56c-11.8-32-38.56-52.92-65.54-54.22C141.63,76.94,149.42,102.39,153.76,105.16Z"
        />
        <path
          className="b"
          d="M72.57,156.75a105.33,105.33,0,0,0,3.18,11.39,9.69,9.69,0,0,0,1.73,3.58c5,7.5,12.43,16.93,13,14.27.94-4.6.31-29.79,1.37-41.44A10.51,10.51,0,0,1,97,136.41l45.2-26.64A10.56,10.56,0,0,0,146.73,97l-5.38-17c-.7-3-1.64-5.22-2.38-8.5-1.24-5.48-3.27-4.26-11.88-3.36a36.11,36.11,0,0,0-9.21,2.46A60.59,60.59,0,0,0,103.79,78C78.94,91.92,65.55,123.92,72.57,156.75Z"
        />
        <path
          className="b"
          d="M135.85,159.82c-8.15-.89-20.44,3.87-27.88,6.67-3.34,1.26-.06,1.57,3.28.31,6-2.25,16.62-4.16,23.15-3.45C138.16,163.76,139.62,160.23,135.85,159.82Z"
        />
        <path
          className="b"
          d="M187.55,153.26c-7.38.08-19.73-.88-26.5,3.29-3,1.87.62,4.2,3.66,2.33,5.46-3.37,15.47-3.15,22-3.7C190.5,154.86,191.35,153.23,187.55,153.26Z"
        />
      </g>
      <g
        id="shadow"
        className="e"
        data-colors={shadowColor}
        onClick={() => setShadowColor(!shadowColor)}
      >
        <path
          className="f"
          d="M232.57,278.3c-.23-6.79-8-7.32-11-8.33-1.19-.4-2.46-1.88-3.56-3.5-6.39-2.13-12.44-5-14.19-8-2.42-4.15-6.45-11.75-8.23-18.4,5.91-12.46,9-28,8.38-44.71-1.69-6.66,0-13.11,1.15-20.12.88-5.33,1.45-10.84,1.81-16.35a3.92,3.92,0,0,1-1.84-1.69,75,75,0,0,1-3.33-9.66c-1.59-6.06-1.43-12.85-6.54-17.48a68.48,68.48,0,0,0-10.24-7.69,78.87,78.87,0,0,0-12.38-6.24c-4.87-1.9-10-3.12-15-4.73-2.72-.88-5.42-2.88-8-2.74-3.83.19-8.3.93-11.17,3.15s-4.25,6.29-5.49,9.85c-1.49,4.27-2,36.45-1.9,41.13a8.93,8.93,0,0,0,2.41.25c1.55,0,9.41,1.11,11.15,2.55,1.89,1.56,7.87,20.62,8.61,23.66.58,2.38,4.27,23.43,4.19,26.56,0,1.74-.35,8-.54,9.44-.63,4.7,3,3.44,5.31,3.43,3.34,0,6.68-.67,10-.68.83,0,2.46,1.59,2.34,2.1a6.05,6.05,0,0,1-2.31,3.58c-2.41,1.38-5.14,2-2.51,5.75.39.54-1.51,3.46-2.94,4.37-3.93,2.52-4.84,16.6-4,19.46,1.29,4.25-.8,5.33-4.09,6.54-.74.27-.71,3.06-.78,4.7-.2,5-.12,10-.48,15-.19,2.53-6.1,4.9-8.42,4.07a31.85,31.85,0,0,0-6.72-1.08c-.23,0-.77.53-.73.67a19.13,19.13,0,0,0,1,2.21c.26.53.55,1,.83,1.56l87.14.28C231.54,290.36,232.69,282,232.57,278.3ZM190.36,171a18.44,18.44,0,0,0-3.69.15c-.84.35-14.94,12.22-17.83,12-4.39-.4-3.72-4.38-4.32-7.27-.48-2.34.63-9.89.75-10.66,0-.11-3.66-1.38-3.9-2.08A4,4,0,0,1,162,160c4.17-5.86,19.28-7.21,20.29-6.88.73.24,1.73,1.27,1.69,1.89s-1.11,1.34-1.76,2l-.84.77a8.66,8.66,0,0,0-.44,1.5c.26.1,9.26,9.32,10.19,10.39C191.26,169.8,190.6,171,190.36,171Z"
        />
        <path
          className="f"
          d="M189.78,103.67a49.33,49.33,0,0,1,10.06,9.82,93.78,93.78,0,0,0-7.72-13.17l-4.73,0C186.35,102.8,188.44,102.67,189.78,103.67Z"
        />
      </g>
      <g
        id="mouth"
        data-colors={mouthColor}
        onClick={() => setMouthColor(!mouthColor)}
      >
        <g id="nose" pointer-events="none">
          <path
            className="h"
            d="M143.92,207s-2.56,10.66,4.84,9.31,7.39,2.77,7.39,2.77"
          />
          <path className="h" d="M170,202.86s3.54,9.63-2.7,10.56" />
        </g>
        <path
          className="i"
          d="M142,236.57c4.79,4.22,10.18,7.36,19.31,6.78s15.76-8.59,17.09-11,2.11-7.4,5.25-7.94c1-.17-11.59,1.81-14.56,1.52s-4.85,1.93-6.58,2.06-4.71-.43-6.55-.09-18.5,4.85-19.93,4.3C134.12,231.48,137.2,232.35,142,236.57Z"
        />
      </g>
      <g id="eye" data-colors={eyeColor} onClick={() => setEyeColor(!eyeColor)}>
        <path
          className="f"
          d="M165.09,174.35s5.83-9.32,11.83-9.79,12.58,4.84,12.58,4.84-7.05,4.75-10.42,5.39S165.09,174.35,165.09,174.35Z"
        />
        <path
          className="f"
          d="M137.2,179.88s-8.78-6.63-14.55-4.92-10,9-10,9,8.28,1.92,11.66,1.32S137.2,179.88,137.2,179.88Z"
        />
        <circle className="k" cx="177.43" cy="169.56" r="5.18" />
        <circle className="k" cx="123.96" cy="179.81" r="5.18" />
        <circle className="f" cx="126.8" cy="177.13" r="1.55" />
        <circle className="f" cx="180.95" cy="166.83" r="1.55" />
        <path
          className="l"
          d="M110,184.07s4.85-8.35,10.75-10.09c4.73-1.4,11.59,2.64,14.06,4.31-.47-.3-1-.64-1.65-1,.94.54,1.75,1,2.32,1.43-2.85-1.82-8.62-4.83-12.8-3.59-5.34,1.58-9.76,8.51-10.33,9.44l-1.23-.27Z"
        />
        <path
          className="l"
          d="M192,168.58s-7.51-6.07-13.64-5.6c-4.92.38-9.89,6.61-11.6,9.05.33-.45.74-1,1.19-1.51-.69.83-1.26,1.6-1.66,2.16,2-2.72,6.33-7.58,10.68-7.92,5.56-.43,12.15,4.47,13,5.13l1.06-.68Z"
        />
      </g>
    </svg>
  )
}

export default ProfilePic
