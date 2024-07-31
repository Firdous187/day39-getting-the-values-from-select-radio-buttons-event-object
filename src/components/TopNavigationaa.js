import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigationaa() {
  let highlightActivePage =(Obj)=>{
     if(Object.isActive == true){
      return{
        backgroundColor:"red",
        color:"white"
      };
     }
  }
  return (
    <div>
        
      <nav className="topNav">
        <NavLink 
         style={(obj) =>{
           return highlightActivePage(obj);
         }}
        to="/App1">Charminar 
        </NavLink>
        <NavLink 
                 style={(obj) =>{
                   return highlightActivePage(obj);
                 }}
        to="/App2">App2</NavLink>

        <NavLink 
                    style={(obj) =>{
                     return highlightActivePage(obj);
                     }}
        to="/App3">App3</NavLink>
        <NavLink 
                    style={(obj) =>{
                         return highlightActivePage(obj);
                         }}
        to="/App4">App4</NavLink>
        <NavLink 
                     style={(obj) =>{
                     return highlightActivePage(obj);
                     }}
        to="/App5">App5</NavLink>

        <NavLink to="/">Login</NavLink>
        <NavLink to="/SignUp">Signup</NavLink>
        </nav>
    </div>

  )
}

export default TopNavigationaa