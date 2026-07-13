import { useContext,useState } from "react"
import { studentContext } from "../context/studentcontext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { addStudent,updateStudent } from "../services/studentservice"
export const Addstudent=()=>{
    const navigate=useNavigate()
    const {students,setStudent,edit,setEdit,fetchStudents}=useContext(studentContext)
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const[dept,setDept]=useState("")
            useEffect(()=>{
            if (edit){
            setName(edit.name)
            setAge(edit.age)
            setDept(edit.dept)
        }
        },[edit])
const handleSubmit = async (e) => {
    e.preventDefault();

    if (
        name.trim() === "" ||
        age.trim() === "" ||
        dept.trim() === ""
    ) {
        return alert("All fields must be filled.");
    }

    // EDIT MODE
       if (edit) {
    const updatedstudent = {
           id: edit.id,
           name,
           age,
           dept,
       };
        await updateStudent(updatedstudent);
        await fetchStudents();
        setEdit(null);

        setName("");
        setAge("");
        setDept("");

        navigate("/students");
        return;
    }

    // ADD MODE
    const newStudent = {
        id: crypto.randomUUID(),
        name,
        age,
        dept,
    };

await addStudent(newStudent);
await fetchStudents();
    setName("");
    setAge("");
    setDept("");

    navigate("/students");
};

    return(
        <div>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter student name"/><br/>
         <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="enter student age"/><br/>
         <input type="text" value={dept} onChange={(e)=>setDept(e.target.value)}  placeholder="enter student department"/><br/>
         <button onClick={handleSubmit}>submit</button>
         <button onClick={()=>navigate('/students')}>students</button>
        </div>
    )
}