import React, { memo } from 'react'
import { HeaderWapper } from './style'
import HeaderLeft from './c-cpn/header-left'
import HeaderCenter from './c-cpn/header-center'
import HeaderRight from './c-cpn/header-right'


const AppHeader = memo(() => {
  return (
      <HeaderWapper>
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
      </HeaderWapper>
  )
})

export default AppHeader