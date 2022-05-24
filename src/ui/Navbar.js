import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const styleNav ={
      
    "backgroundColor":"#1B396A"
  }
  return (
        <nav className="navbar navbar-expand-sm navbar-dark " style={{
            backgroundColor: '#1B396A',
            left: '0',
            top:'0',
            right: '0'
        }}>
            
            
           
              <img src="../assets/tecnm_logo.png" width={150} className="d-inline-block align-top" alt=""/>
           

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                <div className="navbar-nav">

                   
                    {/* <NavLink 
                        className="nav-item nav-link dropdown-toggle" 
                        to="/sedes"
                    >
                     Sedes 
                    </NavLink> */}
                </div>
            </div>

           
        </nav>
    )
}
export default Navbar;