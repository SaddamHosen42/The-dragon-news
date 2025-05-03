import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handelLogOut=()=>{
    logOut().then(()=>{
      alert('Are you sure you want to log out?')
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user&&user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/" className={({isActive})=>isActive?'underline':''}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?'underline':''}>About</NavLink>
        <NavLink to="/career" className={({isActive})=>isActive?'underline':''}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        {
          user?<button onClick={handelLogOut} className="btn btn-primary px-10">Log Out</button>: <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
