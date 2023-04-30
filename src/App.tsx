import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppWrapper from './style'

import Header from '@/components/Header/Header'
import Home from './views/Home/Home'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper>
      <Header />
      <Home />
    </AppWrapper>
  )
}

export default memo(App)
