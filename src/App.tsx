import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppWrapper from './style'

import Header from '@/components/Header/Header'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper>
      <Header />
      App
    </AppWrapper>
  )
}

export default memo(App)
