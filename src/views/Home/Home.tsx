import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './style'

import NavBg from '@/components/NavBg/NavBg'
import BlogNew from '@/components/BlogNew/BlogNew'
import BlogContent from '@/components/BlogContent/BlogContent'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <NavBg />
      <BlogNew />
      <BlogContent />
    </HomeWrapper>
  )
}

export default memo(Home)
