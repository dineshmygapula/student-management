import { useNavigate } from "react-router-dom"
import styles from './Home.module.css'
export const Home=()=>{
    const navigate=useNavigate()
    return(
    <div className={styles.home}>
        <div className={styles.hero}>

          <h1>student management system</h1>

          <p>welcome to the Student Management system</p>
          <p>
                Manage student records efficiently with
               an intuitive and easy-to-use interface.
            </p>
         <div className={styles.buttons}>

           <button onClick={() => navigate("/students")}> View Students</button>
           <button onClick={() => navigate("/dashboard")}> Dashboard</button>
         </div>
      </div>

    </div>
    )
}