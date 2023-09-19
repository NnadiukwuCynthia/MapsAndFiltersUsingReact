import './App.css'
import Menu from './../Components/menu';
import MenuList from './../Components/menuList';
import Background from './Images/background.jpg'
import Button from './../Components/button';
import Footer from './../Components/footer';

function App() {
  // const showCategories = [...new Set(Menu.map((cat) => cat.category))]
  return (
    <>
      <div>
        <MenuList/>
        <div>
          <img src={Background} alt="bgc" className='bgcImage'/>
        </div>
        <Button/>
        <Menu/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
