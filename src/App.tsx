import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppWrapper from './style'

import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import Home from './views/Home/Home'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  const menulist = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'About Me',
      url: '/aboutme'
    }
  ]
  return (
    <AppWrapper>
      <Header menu={<Menu menuList={menulist} />} />
      <Home />
    </AppWrapper>
  )
}

export default memo(App)
