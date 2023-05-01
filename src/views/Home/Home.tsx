import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const name = "Hi, I'm Coderzzx"
  return (
    <HomeWrapper>
      <div className="header_bg">
        <div className="name">
          <h1>{name}</h1>
        </div>
      </div>
      home
    </HomeWrapper>
  )
}

export default memo(Home)
