import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
