import React from 'react'
import Book from './Book'
import {data} from './data'
const BookList = () => 
{
//fun is a method
  const fun=()=>
    {
        alert('i am method')
    }
  return (
    <div className='booklist'>
      {
        data.map((value,index)=>(
            <Book bookdata={value} key={index} meth={fun}/>
        ))
      }
      <button className='btn' onClick={fun}>click me</button>
    </div>
  )
}

export default BookList
