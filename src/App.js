import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Third from './third';

function App() {
  return (
    <div className="app">

<Header/>
<div className='app__body'>

  <Sidebar />
<Feed />
<Third/>
      {/*Feed */}
    {/*Widgets */}
</div>



    </div>
  );
}

export default App;
