import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeWrapper from './style'

import HomeBG from './c-cpn/HomeBG/HomeBG'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <HomeBG />
      <span>coderzzx321</span>
      <div className="demo">demo</div>
      <div className="test">test</div>
      <div className="why">why</div>
    </HomeWrapper>
  )
}

export default memo(Home)
