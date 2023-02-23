import { createMedia } from '@artsy/fresnel'

import { MEDIA_SIZES } from 'Constants/media'

const AppMedia = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    [MEDIA_SIZES.MOBILE]: 0,
    [MEDIA_SIZES.TABLET]: 720,
    [MEDIA_SIZES.DESKTOP]: 1024,
  },
})

// Make styles for injection into the header of the page
const { MediaContextProvider, Media } = AppMedia
const mediaStyles = AppMedia.createMediaStyle()

export { Media, MediaContextProvider, mediaStyles }
