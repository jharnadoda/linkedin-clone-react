import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({avatar, Icon, title, OnClick}) { //icon,title are props
  const user=useSelector(selectUser);
  return (
    <div onClick={OnClick} className='HeaderOption'>
        {Icon && <Icon className='headerOption__icon'/>} 
        {/* if icon is passed then only icon will be rendered. Thats what && signifies. If then */}
        {avatar && <Avatar className='headerOption__icon' src={user?.photoUrl}>
          {user?.email[0]}
          </Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
      
    </div>
  )
}
// props=properties. we can use this headeroption again and again with different properties. like polymorphism
export default HeaderOption

// JSX= javascript+html  <h3>{title}</h3>