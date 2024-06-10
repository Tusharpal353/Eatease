import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <BrowserRouter>
    <StoreContextProvider>
       <App />
    </StoreContextProvider>
     </BrowserRouter>
)
