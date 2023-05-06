import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import BlogCardWrapper from './style'

interface IProps {
  children?: ReactNode
}

const BlogCard: FC<IProps> = () => {
  return (
    <BlogCardWrapper>
      <div className="content">
        <h2>blogname</h2>
        <h3>blogtitle</h3>
        <div className="list">
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
        </div>
      </div>
    </BlogCardWrapper>
  )
}

export default memo(BlogCard)
