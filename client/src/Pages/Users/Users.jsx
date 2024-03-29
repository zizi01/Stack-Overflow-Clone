/*import React from "react";
import { useLocation } from "react-router-dom";

import "./Users.css";
import LeftSiderbar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSiderbar />
      <div className="home-container-2">
        {location.pathname === "/Users" ? <UsersList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
*/
import React from 'react'
import './Users.css'
import LeftSiderbar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {
    
  return (
    <div className='home-container-1'>
        <LeftSiderbar />
        <div className="home-container-2" style={{marginTop: '30px'}}>
            <h1 style={{fontWeight: '400'}}>Users</h1>
            <UsersList /> 
        </div>

    </div>

  )
}

export default Users