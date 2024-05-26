import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './component/home'
import Jobs from'./component/jobs'
import Login from './component/login'
import NotFound from './component/notFound'
import ProtectedRoute from './component/protectedRoute'

const App=()=> (
 
    
    <Routes>
    <Route path='/' element={<ProtectedRoute Component={Home}></ProtectedRoute>}></Route>
    <Route path='/jobs' element={<ProtectedRoute Component={Jobs}></ProtectedRoute>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/*' element={<NotFound></NotFound>}></Route>
  </Routes>

)

  
  


export default App;