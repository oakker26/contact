import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate=useNavigate()
    
    const apiLogin = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const {data}=await axios.post('http://go.contact.mmeducare.com/api/v1/login',formData)
        console.log(data);
        dispatch(login(data));
        if (data?.success) {
            navigate('/Dashboard')
        }
    }


    const Onsubmit = (e) => {
        e.preventDefault()
        apiLogin()
    }
    
  return (
      <div>
           <form action="" onSubmit={Onsubmit} className='form-control container w-50 border-info mt-5'>
              <label htmlFor=""><h1 className='text-info mb-4'>LogIn</h1></label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control mb-4 border-info' placeholder='Email' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='form-control mb-4 border-info' placeholder='password' />
              <button type='submit' className=' btn btn-outline-info mb-4 mt-4 w-50 '> LogIn</button>
          </form>
    </div>
  )
}

export default Login