import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { StudentProvider } from './context/studentcontext'
import App from './app'

ReactDom.createRoot(document.getElementById('root')).render(
<StudentProvider>
<BrowserRouter>
<App/>
</BrowserRouter>
</StudentProvider>
)