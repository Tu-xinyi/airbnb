import React, { memo } from 'react'
import { LeftWapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWapper>
      <div className='logo'>
        <IconLogo/>
      </div>
    </LeftWapper>
  )
})

export default HeaderLeft