import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWapper } from './style'
import Rating from '@mui/material/Rating'


const RoomItem = memo((props) => {
  const {itemData} = props
  return (
    <RoomWapper verifycolor = {itemData?.verify_info?.text_color || '#39576a'}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
         <Rating name="read-only" value={itemData.star_rating??5} readOnly sx={{fontSize:'12px'}}/>
         <span className='count'>{itemData.reviews_count}</span>
         <span className='extra'>{itemData?.bottom_info?.content}</span>

        </div>
      </div>
    </RoomWapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object
}

export default RoomItem