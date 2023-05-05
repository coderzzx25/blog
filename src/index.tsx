import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 样式初始化
import 'reset.less'
import '@/assets/css/index.less'
import theme from './assets/theme'
import { ThemeProvider } from 'styled-components'
// 动画库
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
