import React, { useState } from 'react'
import { signUpFormValidation } from '../utils/validation';
import '../styles/App.css';


const App = () => {
  const[error, setError] = useState();
  const[details, setDetails] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    const name=e.target.name;
    const value=e.target.value;
    
      setDetails((prev)=>{
        return{...prev, [name]: value}
      })
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(signUpFormValidation(details));
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name='name' onChange={handleChange}/><br/>
        {error? <div>{error.name}</div>:""}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name='email' onChange={handleChange} /><br />
        {error? <div>{error.email}</div>: ""}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name='password' onChange={handleChange} /><br />
        {error? <div>{error.password}</div>: ""}
        <label htmlFor="consent">Consent</label>
        <input type="checkbox" id="consent" name='consent' /><br />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}


export default App;
