import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MenuWrapper from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  menuList?: Array<{ id: number; name: string; url: string }>
}

const Menu: FC<IProps> = (props) => {
  const { pathname } = useLocation()
  const { menuList } = props
  return (
    <MenuWrapper>
      {menuList?.map((item) => {
        return (
          <NavLink
            className={classNames('item', { setitem: item.url === pathname ? 'setitem' : '' })}
            to={item.url}
            key={item.id}
          >
            {item.name}
          </NavLink>
        )
      })}
    </MenuWrapper>
  )
}

export default memo(Menu)
