import { createContext,useState } from "react";
import { getStudents } from "../services/studentservice";
import { useEffect } from "react";

export const studentContext=createContext();
export const StudentProvider=({children})=>{
    const [students,setStudent]=useState([])
    const [edit,setEdit]=useState(null)
    const [loading, setLoading] = useState(false);
    const fetchStudents= async ()=>{
        setLoading(true);
        const data=await getStudents()
        setStudent(data)
        setLoading(false)
        
    }
    useEffect(()=>{
        fetchStudents();
    },[])

    return(
        <studentContext.Provider value={{students,setStudent,edit,setEdit,fetchStudents,loading}}>{children}</studentContext.Provider>
    )

}