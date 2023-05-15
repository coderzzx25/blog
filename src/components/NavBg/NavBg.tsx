import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import NavBgWrapper from './style'
import bg from '@/assets/images/bg.jpg'

interface IProps {
  children?: ReactNode
}

const NavBg: FC<IProps> = () => {
  return (
    <NavBgWrapper>
      <img src={bg} alt="" />
      <div className="bg-text">
        <h1>WELCOME TO MY BLOG</h1>
      </div>
    </NavBgWrapper>
  )
}

export default memo(NavBg)
