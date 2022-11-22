import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Register = () => {
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirm, setConfirm] = useState('');
    const [Photo, setPhoto] = useState('');
    const apiRegister = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', Email);
        formData.append('password', Password);
        formData.append('password_confirmation', Confirm);
        formData.append('userPhoto', Photo);
        const { data } = await axios.post('http://go.contact.mmeducare.com/api/v1/register', formData);
        console.log(data);
    }



    const OnSubmit = (e) => {
        e.preventDefault();
        apiRegister();
    }
  return (
      <div>
          <form onSubmit={OnSubmit} action="" className='form-control container w-50 border-info mt-5'>
              <label htmlFor=""><h1 className='text-info'>Register Account</h1></label>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='form-control mb-4 border-info' placeholder='name'/>
          <input onChange={(e)=>setEmail(e.target.value)} value={Email} type="email" className='form-control mb-4 border-info' placeholder='Email' />
          <input onChange={(e)=>setPassword(e.target.value)} value={Password} type="password" className='form-control mb-4 border-info' placeholder='password' />
              <input onChange={(e)=>setConfirm(e.target.value)} value={Confirm} type="password" className='form-control mb-4 border-info' placeholder='confirmation' />
              <input onChange={(e) => setPhoto(e.target.files[0])}  type="file" className='form-control border-info mb-4' />
              <button   type='submit' className=' btn btn-outline-info mb-4 mt-4 w-50 '> Register</button>
          </form>
    </div>
  )
}

export default Register