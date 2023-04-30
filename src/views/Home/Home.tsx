import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return <HomeWrapper>home</HomeWrapper>
}

export default memo(Home)
