import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import BlogContentWrapper from './style'

interface IProps {
  children?: ReactNode
  name: string
  title?: string
  list?: any[]
}

const BlogContent: FC<IProps> = (props) => {
  const { name, title, list } = props
  return (
    <BlogContentWrapper>
      {name && <h2>name</h2>}
      {title && <h3>title</h3>}
      <div className="content">
        {list &&
          list.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
            )
          })}
      </div>
    </BlogContentWrapper>
  )
}

export default memo(BlogContent)
