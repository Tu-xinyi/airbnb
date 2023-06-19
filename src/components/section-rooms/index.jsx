import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from "@/components/room-item";
import { RoomsWapper } from './style';

const SectionRooms = memo((props) => {
  const {roomList} = props
  return (
    <RoomsWapper>
    {roomList&&
      roomList.slice(0,8).map((item) => {
        return <RoomItem itemData={item} key={item.id}/>
      })}
  </RoomsWapper>
  )
})

SectionRooms.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms