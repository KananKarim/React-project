
import { useState } from 'react'
import { getMovieData } from '../../services/db'
import './style.css'

const Input = () => {
  const [data,setData] = useState([]) 
  const HandleSubmit= async(e)=>{
    e.preventDefault()
     const result = await getMovieData(e.target.moviename.value) 
     setData(result)
  }
  return (
    <>
    <div className='input'>
        <form className='input-form' onSubmit={HandleSubmit}>
          
            <p>Искать фильм по названию:</p> 
            <input type='text' name='moviename' className='input-value' placeholder='Enter the movie name'/>
            <button className='input-button'>Send</button>
            
        </form>
    </div>
    <ul>
      {
        data?.map((item,index)=>(
          <li key={index}>{item.Title}</li>
        ))
      }
    </ul>
    </>
  )
}

export default Input;