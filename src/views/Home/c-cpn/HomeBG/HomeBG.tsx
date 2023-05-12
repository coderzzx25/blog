import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeBGWrapper from './style'

interface IProps {
  children?: ReactNode
  name?: string
}

const HomeBG: FC<IProps> = (props) => {
  const { name = "Hi, I'm Coderzzx" } = props
  return (
    <HomeBGWrapper>
      <h1>{name}</h1>
    </HomeBGWrapper>
  )
}

export default memo(HomeBG)
