import React from 'react'
import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Todo from './Components/Todo';





const App = () => {
  return (


         <div>
         <Navbar/> 
         <div className='main'>
         <Input/> 
         <Todo/>
         </div> 
        
    </div>
  )
}

export default App;