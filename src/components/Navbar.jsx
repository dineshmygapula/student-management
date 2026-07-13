import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate,FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
       <nav className={styles.navbar}>
      <h2 className={styles.logo} onClick={()=>navigate('/')}>
         <FaUserGraduate className={styles.icon}/>
          Student Management
       </h2>
            <div className={styles.navLinks}>
               <NavLink to='/'>
                  <FaHome/>
                  Home
              </NavLink>
              <NavLink to='dashboard'>
                <MdDashboard/>
                Dashboard
                </NavLink>
              <NavLink to='students'>
                <FaUserGraduate/>
                Students
                </NavLink>
              <NavLink to='addstudent'>
                addstudent
                <FaPlusCircle/>
                </NavLink>
              </div>
       </nav>
    )
}