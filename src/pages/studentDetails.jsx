import { useParams } from "react-router-dom"
import { studentContext } from "../context/studentcontext"
import { useContext } from "react"
export const StudentDetails=()=>{
    const {id}=useParams()
    const {students}=useContext(studentContext)
    console.log("URL id:", id);
    console.log("Students:", students);
const student = students.find((st) => st.id ===id);
if (students.length===0){
    return (<h2>studentss not exist</h2>)
}
return(
        <>
        <h2>student detailes</h2>
        <h2>{student.id}</h2>
        <h2>{student.name}</h2>
        <h2>{student.age}</h2>
        <h2>{student.dept}</h2>
        </>

    )
}