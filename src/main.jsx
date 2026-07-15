import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { StudentProvider } from './context/studentcontext'
import App from './app'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDom.createRoot(document.getElementById('root')).render(
<StudentProvider>
<BrowserRouter>
<App/>
<ToastContainer/>
</BrowserRouter>
</StudentProvider>
)