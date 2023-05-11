import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
// 路由 hooks
import { useRoutes } from 'react-router-dom'
// 路由配置
import routes from './router'
// 样式
import AppWrapper from './style'
// 菜单配置
import menulist from '@/config/menu.config'
// 组件
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper>
      <Header menu={<Menu menuList={menulist} />} />
      {useRoutes(routes)}
      coderwhy
    </AppWrapper>
  )
}

export default memo(App)
