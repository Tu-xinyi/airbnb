import React, { memo ,useEffect,useState} from 'react'

import { RightWapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
  // 定义状态
  const [showPanel,setShowPanel] = useState(false)
  // 副作用
  useEffect(()=>{
    function windowHandelClick(){
      setShowPanel(false)
    }

    window.addEventListener('click',windowHandelClick,true)

    return ()=>{
      window.removeEventListener('click',windowHandelClick,true)
    }
  },[])

  // 事件处理函数
  function profileClickHandel(){
    setShowPanel(true)
  }
  return (
    <RightWapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'><IconGlobal/></span>
      </div>
     <div className='profile'  onClick={profileClickHandel}>
        <IconProfileMenu/>
        <IconProfileAvatar/>
        {showPanel && (
          <div className='panel'>
          <div className='top'>
            <div className='item rgister'>注册</div>
            <div className='item login'>登录</div>
          </div>
          <div className='bottom'>
          <div className='item'>出租房源</div>
          <div className='item'>开展体验</div>
          <div className='item'>帮助</div>
          </div>
        </div>
        )

        }
     </div>
    </RightWapper>
  )
})

export default HeaderRight