export declare global {
  interface Window {
    JitsiMeetExternalAPI: any
    ReactPixel: any
  }
}

declare module 'react-modal-image'

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png' {
  const content: any
  export default content
}

declare module 'react-dates/constants'
