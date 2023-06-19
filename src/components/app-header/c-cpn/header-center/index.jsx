import React, { memo } from 'react'
import { CenterWapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWapper>
      <div className='search-bar'>
       <div className='text'>搜索房源和体验</div>
        <span className='icon'>
          <IconSearchBar/>
        </span>
      </div>
    </CenterWapper>
  )
})

export default HeaderCenter