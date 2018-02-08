// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'react-emotion'

// A list of all media queries
// https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
// https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/
// But most important, do this:
// https://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints/

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  // phone: 376
  phone: 400
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

// iterate through the sizes and create a media template
export default media
