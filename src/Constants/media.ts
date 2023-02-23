export enum MEDIA_SIZES {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export const size = {
  [MEDIA_SIZES.MOBILE]: '767px',
  [MEDIA_SIZES.TABLET]: '1023px',
  [MEDIA_SIZES.DESKTOP]: '1024px',
}

export const device = {
  mobile: `(max-width: ${size[MEDIA_SIZES.MOBILE]})`,
  tablet: `(max-width: ${size[MEDIA_SIZES.TABLET]})`,
}
