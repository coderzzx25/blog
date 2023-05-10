import React from 'react'
// 路由
import { Navigate } from 'react-router-dom'
// 路由ts类型
import type { RouteObject } from 'react-router-dom'
// 组件懒加载
const Home = React.lazy(() => import('@/views/Home/Home'))
const About = React.lazy(() => import('@/views/About/About'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]

export default routes
