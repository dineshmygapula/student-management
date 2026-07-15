const BASE_URL = "https://student-management-5m4p.onrender.com/students";
export const getStudents= async ()=>{
    const response= await fetch(BASE_URL)
    const data=await response.json()
    return data;
}
export const addStudent=async (newStudent)=>{
    const response=await fetch(BASE_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
});
    const data= await response.json()
    return data;
}
export const deleteStudent=async (id)=>{
      await fetch(`${BASE_URL}/${id}`,{
        method:'DELETE'
      })
}
export const updateStudent=async (student)=>{
    const response=await fetch(`${BASE_URL}/${student.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(student)
    })
    const data = await response.json();

    return data;
};