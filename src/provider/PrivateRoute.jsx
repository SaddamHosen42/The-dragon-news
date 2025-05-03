import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loding from '../components/Loding';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location=useLocation();
   // console.log(location);
    if(loading){
        return <Loding></Loding>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login" replace={true}></Navigate>
};

export default PrivateRoute;