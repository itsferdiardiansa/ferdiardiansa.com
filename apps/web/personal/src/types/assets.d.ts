declare module '*.svg' {
  import React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.webp'

declare module '*.mp4'
declare module '*.mp3'
declare module '*.wav'
declare module '*.ogg'

declare module '*.woff'
declare module '*.woff2'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
