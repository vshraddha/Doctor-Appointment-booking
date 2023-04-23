import React from 'react'
import "../styles/Layout.css";
import { sidebarMenu } from '../Data/data';
import {Link,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
const {user} = useSelector(state => state.user)
const location = useLocation()
  return (
    <>
    <div className='main'>
        <div className='layout'>
            <div className='sidebar'>
                <div className='logo'><h5>Doctor Appointment</h5><hr/></div>
                
                <div className='menu'>
                  {sidebarMenu.map(menu=>{
                    const isActive= location.pathname===menu.path

                  return (
                    <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className= {menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>

                    </div>
                    
                    </>
                  );
                    

                })}
                </div>


            </div>
            <div className='content'>
            <div className='header'>
              <div classname="header-content">
              <i class="fa-solid fa-bell"></i>
              <Link to="/profile">{user.name}</Link>

              </div>
              
            <div className='body'>{children}</div>
           


            </div>


        </div>
      
      </div>
    </>
    
  );


export default Layout;
