import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Gurd = ({children}) => {
    const user = useSelector((state) => state.user.value);
    if (user.success) return children;
    else return <Navigate to="/login"/>
}

export default Gurd