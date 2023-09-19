// import React from 'react'
import MenuListData from './menuListData'

const MenuList = () => {
  return (
    <>
    <div className='menu'>
        {
            MenuListData.map((eachList, index) => {
                const {title, icon } = eachList
                return (
                    <div key={index} className='menuItems'>
                        <h2>{icon}{title}</h2>
                    </div>
                )
            })
        }
    </div>
    </>   
  )
}

export default MenuList;