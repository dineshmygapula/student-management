import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
export const Navbar=()=>{
    return(
       <>
               <Link to='/'>Home</Link>
              <Link to='dashboard'>Dashboard</Link>
              <Link to='students'>Students</Link>
              <Link to='studentdetails/:id'>studentDetails</Link>
              <Link to='addstudent'>addstudent</Link>
              <Outlet/>
       </>
    )
}