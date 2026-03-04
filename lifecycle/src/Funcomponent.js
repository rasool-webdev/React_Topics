import React , {useEffect,useState} from 'react'
import './App.css'
const Funcomponent = ()=>
{
    const [data,setData]=useState([])
    useEffect(() =>
    {
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=> setData(data))
    },[])
    
    return (
        <div className='Cart'>
            {
                data.map((val,index) =>(
                    <div className='div' key={index}>
                      <img
                        src={val.image}
                        />
                        <h1>{val.title}</h1>
                        <p> Price : {val.price}</p>
                        <button className='btn' onClick={val.cart}>By Now</button>
                    </div>
                )
                )
            }
            {/* <button onClick={() => setData(data + 1)}>Data</button> <br />
			<button onClick={() => setMsg("hello")}>msg</button> */}
        </div>
    )
}

export default Funcomponent