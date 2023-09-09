import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'

function HeaderOption({avatar, Icon, title}) { //icon,title are props
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className='headerOption__icon'/>} 
        {/* if icon is passed then only icon will be rendered. Thats what && signifies. If then */}
        {avatar && <Avatar className='headerOption__icon' src={avatar}/>}
        <h3 className='headerOption__title'>{title}</h3>
      
    </div>
  )
}
// props=properties. we can use this headeroption again and again with different properties. like polymorphism
export default HeaderOption

// JSX= javascript+html  <h3>{title}</h3>