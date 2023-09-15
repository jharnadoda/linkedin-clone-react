import { Avatar } from '@mui/material'
import React from 'react';
import { forwardRef } from 'react';
import './Post.css'
import InputOption from './InputOption';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined, ThumbUpAltSharp, ThumbsUpDownOutlined } from '@mui/icons-material';

const Post=forwardRef(( {name, description, message, photoUrl},ref) =>{
  return (
    <div ref ={ref} className='post'>
      <div className='post__header'>

      <Avatar src={photoUrl}>{name[0]}</Avatar>
      <div className='post__info'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </div>


      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlined} title='Like'/>
        <InputOption Icon={ChatOutlined} title='Comment'/>
        <InputOption Icon={ShareOutlined} title='Share'/>
        <InputOption Icon={SendOutlined} title='Send'/>
      </div>
    </div>
  )
})

export default Post
