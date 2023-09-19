import MenuData from '../Components/menuData'

const Menu = () => {
  return (
    <>
        <div className='Menu_container'>
            {
                MenuData.map((eachMenu, index) => {
                    const {Title, Category, Price, Image, Description} = eachMenu
                    return (
                        <div key={index} className='eachMenu'>
                            <img src={Image} alt={Title} className='menuImage'/>
                            <h3 className='title'>{Title}</h3>
                            <p className='category' >{Category}</p>
                            <p className='category'>{Price}</p>
                            <p className='description'>{Description}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Menu