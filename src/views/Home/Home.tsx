import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './style'

import HomeBG from './c-cpn/HomeBG/HomeBG'
import BlogContent from '@/components/BlogContent/BlogContent'

interface IProps {
  children?: ReactNode
}

const info = {
  name: 'name',
  title: 'title',
  list: [
    {
      id: 1,
      img: 'https://static-cse.canva.cn/blob/239388/e1604019539295.jpg',
      title: 'blog1'
    },
    {
      id: 2,
      img: 'https://static-cse.canva.cn/blob/239388/e1604019539295.jpg',
      title: 'blog2'
    },
    {
      id: 3,
      img: 'https://static-cse.canva.cn/blob/239388/e1604019539295.jpg',
      title: 'blog3'
    }
  ]
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeBG />
      <BlogContent name={info.name} title={info.title} list={info.list} />
    </HomeWrapper>
  )
}

export default memo(Home)
