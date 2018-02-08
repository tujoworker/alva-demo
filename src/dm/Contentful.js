import { createClient } from 'contentful'

export default createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'pfwsveyc69cs',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    'f55afce18ea79e81ed5d47f70ca0538fea8ac2b39bb1711297c39696f9c071a1'
})
