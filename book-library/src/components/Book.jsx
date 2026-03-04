import React from 'react'
const Book = ({bookdata}) => 
{
  return (
    <div className='book'>
      <h1>{bookdata.title}</h1>
      <h1>{bookdata.author}</h1>
      <h1>{bookdata.year}</h1>
      <a href={bookdata.link} rel='noreferrer' target='_blank'><button>See Details</button></a>
    </div>
  )
}




/*
<div className=' box-border h-32 w-32	'>
      <h1 className=' text-blue-600'>{bookdata.title}</h1>
      <h1>{bookdata.author}</h1>
      <h1>{bookdata.year}</h1>
      <a href={bookdata.link} rel='noreferrer' target='_blank'><button>See Details</button></a>
</div>
*/




/*
Bokk.defaultProps={
  bookdata:{
    title:123,
    author:'clint',
    year:2055,
    link:'www.google.com'
  }
}
 */
export default Book
