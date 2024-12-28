
import './App.css'
import EmployeeComponent from './Component/EmployeeComponent'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import { BrowserRouter, Route , Routes } from 'react-router-dom'


function App() {

  return (
    <>

    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
        {/* //http://localhost:3000 */}
        <Route path='/' element ={<ListEmployeeComponent/>}></Route>

        {/* //http://localhost:3000/employees */}
        <Route path='/employees' element = {<ListEmployeeComponent/>}></Route> 

        {/* //http://localhost:3000/add-employee */}
        <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

        {/* //http://localhost:3000/update-employee/1 */}
        <Route path='/update-employee/:id' element = { <EmployeeComponent/>}></Route>
        </Routes>
      <FooterComponent/>
     
      </BrowserRouter>
    </>
  )
}

export default App
