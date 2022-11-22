import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
  const user = useSelector(state => state.user.value);
  console.log(user)
  const dispatch = useDispatch()
  const handler = () => {
    dispatch(logOut(null));
    



  }
  return (
    <div className='container mt-4 d-flex justify-content-between'>
      <h2>Dashboard</h2>
      <div className=' d-flex  '>
      <p className='fs-4 me-4'>{user?.auth?.name}</p>
      <button onClick={handler} className='btn btn-outline-warning px-5 py-2'>logOut</button>
     </div>
    </div>
  )
}

export default Dashboard