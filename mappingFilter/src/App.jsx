import './App.css'
import Menu from './../Components/menu';
import MenuList from './../Components/menuList';
import Background from './Images/background.jpg'
import Button from '../Components/Buttons';

function App() {
  // const showCategories = [...new Set(Menu.map((cat) => cat.category))]
  return (
    <>
      <div>
        <MenuList/>
        <div>
          <img src={Background} alt="bgc" className='bgcImage'/>
        </div>
        <Button>
          {/* Categories = {showCategories} */}
        </Button>
        <Menu/>
      </div>
    </>
  )
}

export default App
