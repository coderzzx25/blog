import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HeaderWrapper from './style'

interface IProps {
  children?: ReactNode
  menu: ReactNode
}

const Header: FC<IProps> = (props) => {
  const { menu } = props
  return (
    <HeaderWrapper>
      <div className="content">
        <h1 className="logo">CODERZZX</h1>
        <div className="menu">{menu}</div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(Header)
