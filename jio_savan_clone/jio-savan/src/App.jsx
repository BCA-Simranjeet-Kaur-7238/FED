import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import AlbumDetails from "./pages/AlbumDetails"
import Login from "./components/Login"
import Signup from './components/Signup'
import { useState } from "react"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/albums/:id" element ={<AlbumDetails/>}/>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    </BrowserRouter>
  )
}