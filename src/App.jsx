import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks ,setBookmarks]=useState([]);
  const [readingTime ,setReadingTime]=useState(0)


  const handelAddToBookmarks =blog =>{
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handelMarksAsReed =time=>{
    setReadingTime(readingTime + time);
    
  }



  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-20'>
      <Blogs 
      handelAddToBookmarks={handelAddToBookmarks} 
      handelMarksAsReed={handelMarksAsReed}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
        
      
    </>
  )
}

export default App
