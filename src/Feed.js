
import './Feed.css';
import React, { useState, useEffect } from 'react'
import InputOption from './InputOption.js';
import Post from './Post';


import { CalendarViewDay, Edit, EventNote, Image, Subscriptions } from '@mui/icons-material';
import { db } from './firebase';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Feed() {
  const [input, setInput]=useState('');
  // this is state, hooks
  const [posts, setPosts] =useState([]); 

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>  
      setPosts(
        snapshot.docs.map((doc) => (
        {
          id:doc.id,
          data: doc.data()
        }
      ))
    )
    );

  }, []);
  const sendPost = (e) =>{
    e.preventDefault(); //now it wont refresh when we hit enter on new post

    db.collection('posts').add({
      name: 'Jharna Doda',
      description: 'testing',
      message:input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Edit/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
          <button onClick={sendPost} type="submit">Send</button>
        </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption Icon={Image} title='Media' color="#70B5F9" />
          <InputOption Icon={EventNote} title='Event' color="#E7A33E" />
          <InputOption Icon={CalendarViewDay} title='Write Article' color="#7FC15E" />
          <InputOption Icon={CalendarViewDay} title='Write Article' color="#7FC15E" />
          
        </div>
      </div>
      {posts.map(({id,data:{ name ,description, message, photoUrl}}) => (
        <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
       />
      ))}
      {/* <Post name='Jharna Doda' description="Test" message='WOW this worked' photoUrl='www'/> */}
    </div>
  )
}
// import firebase from 'firebase/compat';

export default Feed
