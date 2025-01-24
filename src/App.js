import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'
import ShowUser from './components/ShowUser'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Hello World</h1> */}
        <Routes>
          <Route exact path='/' element={<ShowUser />} />
          <Route exact path='/addUser' element={<AddUser />} />
          <Route exact path='/updateUser/:id' element={<UpdateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
