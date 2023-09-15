import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user=useSelector(selectUser);
    // this is a function
    const recentItem = (topic) => (
        <div className="sidebar__recentItem"> 
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
    <div className='sidebar__top'>
        <img src='https://picsum.photos/200/300/?blur=2' alt='' />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>
            {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
    </div>

    <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who Viewed you</p>
            <p className='sidebar__statNumber'>543</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>1003</p>
        </div>
    </div>

    <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('nodejs')}
        {recentItem('aws')}
        {recentItem('springboot')}
        {recentItem('jsx')}
        {recentItem('reactjs')}
    </div>
      
    </div>
  )
}

export default Sidebar
