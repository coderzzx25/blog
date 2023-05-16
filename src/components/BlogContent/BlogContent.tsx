import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import BlogContentWrapper from './style'

import ContentItem from '../ContentItem/ContentItem'

interface IProps {
  children?: ReactNode
}

const BlogContent: FC<IProps> = () => {
  return (
    <BlogContentWrapper>
      <h1>CONTENTNAME</h1>
      <p>CONTENTTEXT</p>
      <div className="ContentList">
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    </BlogContentWrapper>
  )
}

export default memo(BlogContent)
