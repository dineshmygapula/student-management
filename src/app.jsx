import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import { Students } from "./pages/students";
import { StudentDetails } from "./pages/studentDetails";
import { AddStudent } from "./pages/Addstudent";
import { Layout } from "./pages/Layout";
const App=()=>{
    return(
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='students' element={<Students/>}/>
        <Route path='studentdetails/:id' element={<StudentDetails/>}/>
        <Route path='addstudent' element={<AddStudent/>}/>
        </Route>

      </Routes>
    )
} 
export default App;