import React, { ReactNode } from 'react'
import { Home, Person } from '@mui/icons-material'

interface IMenu {
  id: number
  name: string
  url: string
  icon?: ReactNode
}
// 菜单列表
const menulist: IMenu[] = [
  {
    id: 1,
    name: 'Home',
    url: '/home',
    icon: <Home />
  },
  {
    id: 2,
    name: 'About Me',
    url: '/about',
    icon: <Person />
  }
]

export default menulist
