import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 样式初始化
import 'reset.less'
import '@/assets/css/index.less'
// 动画库
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
