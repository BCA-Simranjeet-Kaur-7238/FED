import React from 'react'
import Navbar from "../components/Navbar"
import Player from '../components/Player'
import MainSection from '../components/MainSection'
import Playlist from '../components/Playlist'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Navbar/>
    <MainSection/>
    <Playlist/>
    <Player/>
    </>
  )
}

export default Home
