import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { BusinessCenter, Chat, Home, LinkedIn, SupervisorAccount, Notifications } from '@mui/icons-material';
import HeaderOption from './HeaderOption';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


function Header() {

  // const user= useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp =() => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>


      <div className='header__left'>
     <LinkedIn fontSize='large'/>
     {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedinlogo" /> */}
     <div className='header__search'>
      <SearchIcon/>
      <input placeholder='Search' type='text'/>
      {/*SearchIcon*/ }
     </div>
      </div>
     
      <div className='header__right'>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount}title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" OnClick={logoutOfApp} />


      </div>



      
    </div>
  )
}

export default Header
