import React from 'react'
import TopNavigationaa from './TopNavigationaa'
import { Link } from 'react-router-dom'

function Dashborad() {
  return (
    <div>
         <h1>Dashboard</h1>
         <div style={{
          textAlign:'center',
          fontSize: "2rem",
          color:"#994548",
          backgroundColor:"#B3CC80"
          }}>
         <p>Travelling places in hyderabad</p>
         </div>
         <TopNavigationaa/>
    </div>
  )
}

export default Dashborad