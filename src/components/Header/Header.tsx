import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HeaderWrapper from './style'

import Menu from '../Menu/Menu'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const menulist = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'About Me'
    }
  ]
  return (
    <HeaderWrapper>
      <div className="content">
        <h1 className="logo">CODERZZX</h1>
        <div className="menu">
          <Menu menuList={menulist} />
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(Header)
