import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ContentItemWrapper from './style'
import bg from '@/assets/images/bg.jpg'

interface IProps {
  children?: ReactNode
}

const ContentItem: FC<IProps> = () => {
  return (
    <ContentItemWrapper>
      <div className="ItemImg">
        <img src={bg} alt="" />
      </div>
      <h4>ITEMNAME</h4>
      <p>ITEMTEXT</p>
    </ContentItemWrapper>
  )
}

export default memo(ContentItem)
