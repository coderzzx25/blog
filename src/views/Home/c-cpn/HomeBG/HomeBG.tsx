import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HomeBGWrapper from './style'
import { Box, Typography } from '@mui/material'

interface IProps {
  children?: ReactNode
  name?: string
}

const HomeBG: FC<IProps> = (props) => {
  const { name = "Hi, I'm Coderzzx" } = props
  return (
    <HomeBGWrapper>
      <Box className="home-bg">
        <Typography variant="h1">{name}</Typography>
      </Box>
    </HomeBGWrapper>
  )
}

export default memo(HomeBG)
