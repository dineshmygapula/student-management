    import { studentContext } from "../context/studentcontext"
    import { useContext, useState } from "react"
    import { useNavigate } from "react-router-dom"
    import { deleteStudent } from "../services/studentservice"
    
    export const Students=()=>{
        const navigate=useNavigate()
        const {students,setStudent,edit,setEdit,fetchStudents}=useContext(studentContext)
        const [search,setSearch]=useState("")
        const [sortBy,setSortBy]=useState("")
        if (students.length===0){
            return(
                <h2>student does not exist</h2>
            )
        }
        console.log(students)
        const handledelete= async (id)=>{
           let confirmdelete= window.confirm("Are you sure you want to delete the user")
            if (!confirmdelete) return;
            await deleteStudent(id);
           await fetchStudents();

        }
        const filteredstudents= students.filter((e)=>(
            e.name.toLowerCase().includes(search.toLowerCase())
        ))
       const sortedStudents=[...filteredstudents]
       if (sortBy==='nameASC'){
          sortedStudents.sort((a,b)=>a.name.localeCompare(b.name))
       }
       if (sortBy==='nameDSC'){
        sortedStudents.sort((a,b)=>b.name.localeCompare(a.name))
       }
       if (sortBy==='ageASC'){
        sortedStudents.sort((a,b)=>a.age-b.age)
       }
       if (sortBy==='ageDesc'){
        sortedStudents.sort((a,b)=>b.age-a.age)
       }
        const handleedit=(e)=>{
            setEdit(e)
            navigate('/addstudent')
        }
        return(
         <>
            <input type="text" placeholder="search student"  onChange={(e)=>setSearch(e.target.value)}value={search}/>
            
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
                <option value="">select</option>
                <option value='nameASC'>Name (A-Z)</option>
                <option value="nameDSC">Name (Z-A)</option>
                <option value="ageASC">Age (low-hight) </option>
                <option value="ageDesc">Age (High-Low)</option>
            </select>
              {
                sortedStudents.map((student)=>(
                        <div key={student.id}>
                        <h2>{student.name}</h2>
                        <button onClick={()=>navigate(`/studentdetails/${student.id}`)}>view</button>
                        <button onClick={()=>handledelete(student.id)}>Delete</button>
                        <button onClick={()=>handleedit(student)} >Edit</button>
                        </div>
                    
                ))
            }    
        </>
        )
    }
