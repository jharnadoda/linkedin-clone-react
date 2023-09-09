import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
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
        <Avatar className='sidebar__avatar' />
        <h2>Jharna Doda</h2>
        <h4>jharnadoda99@gmail.com</h4>
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
