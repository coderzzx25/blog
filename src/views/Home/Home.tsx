import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import NavBg from '@/components/NavBg/NavBg'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <NavBg />
    </div>
  )
}

export default memo(Home)
