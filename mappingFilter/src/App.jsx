// import { useState } from 'react'
import './App.css'
import Menu from './../Components/menu';
import MenuList from './../Components/menuList';
import Background from './Images/background.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MenuList/>
        <div>
          <img src={Background} alt="bgc" className='bgcImage'/>
        </div>
        <Menu/>
      </div>
    </>
  )
}

export default App
