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
      <div className="wrapper">
        <div className="content">
          <h2>blog-name</h2>
          <h3>blog-title</h3>
          <div className="content-list">
            <div className="content-item">item</div>
            <div className="content-item">item</div>
            <div className="content-item">item</div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
