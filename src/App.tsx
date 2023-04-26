import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import WrapperApp from './style'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return <WrapperApp>App</WrapperApp>
}

export default memo(App)
