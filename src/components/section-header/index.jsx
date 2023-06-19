import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeadWapper } from './style'

const SectionHeader = memo((props) => {
  const {title,subtitle} = props
  return (
    <HeadWapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeadWapper>
  )
})

// 接受属性类型的验证
SectionHeader.propTypes = {
  title:PropTypes.string,
  subtitle:PropTypes.string
}

export default SectionHeader