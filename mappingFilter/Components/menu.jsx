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
                            <h3>{Title}</h3>
                            <p>{Category}</p>
                            <p>{Price}</p>
                            <p>{Description}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Menu