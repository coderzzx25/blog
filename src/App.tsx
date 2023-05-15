import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
// 路由 hooks
import { useRoutes } from 'react-router-dom'
// 路由配置
import routes from './router'
// 样式
import AppWrapper from './style'
// 组件
import NavBar from '@/components/NabBar/NavBar'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper>
      <NavBar />
      {useRoutes(routes)}
    </AppWrapper>
  )
}

export default memo(App)
