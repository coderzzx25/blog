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
    </HomeWrapper>
  )
}

export default memo(Home)
