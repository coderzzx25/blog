import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import MenuWrapper from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  menuList?: Array<any>
}

const Menu: FC<IProps> = (props) => {
  const { menuList } = props
  return (
    <MenuWrapper>
      {menuList?.map((item) => {
        return (
          <div
            className={classNames('item', { setitem: item.id === 1 ? 'setitem' : '' })}
            key={item.id}
          >
            {item.name}
          </div>
        )
      })}
    </MenuWrapper>
  )
}

export default memo(Menu)
