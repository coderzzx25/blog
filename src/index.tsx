import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// styled-components 主题
import { ThemeProvider } from 'styled-components'
// react-router-dom 路由
import { BrowserRouter } from 'react-router-dom'
// 根组件
import App from './App'
// 样式初始化
import 'reset.less'
// 全局样式
import '@/assets/css/index.less'
// 主题
import theme from './assets/theme'
// 路由切换白屏动画
import { CircularProgress } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
)
