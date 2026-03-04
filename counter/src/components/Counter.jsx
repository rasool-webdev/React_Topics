import React,{ useState } from 'react';

const Counter = () => 
{
    /*usestate */
    const [count,setCount]=useState(0);
    const [error,setError]=useState('');
    const [suc,setSuc]=useState('');

    const incr =()=>
    {
      if (count >=5)
      {
        setSuc(' You Reached Above Value')
      }
      else{
        setCount(count+1)
      }
    }
    const decr =()=>
    {
      if(count <=0)
       {
        setError('NO below Error')
      }
      else{
        setCount(count-1)
      }
      
    }
    const reset =()=>
    {
        setCount(0)
    }
  return (
    <div className='counter'>
      <p>Functional Component</p>
      <p>Count : {count}</p>
      <p className='error'>{error}</p>
      <p className='suc'>{suc}</p>
      <div className='button'>
        <button onClick={incr}>increase</button>
        <button onClick={decr}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
