import React, {useState} from 'react'
import './style.css'
import MenuCard from './MenuCard'
import Menu from './menuApi'
import Navbar from './Navbar'
const filtList = [ ...new Set( Menu.map((curElem) => {
    return curElem.category;
})
), "All"];
const Restaurant = () => {
    //useState for state(data) management
    const [menuData, setmenuData] = useState(Menu)
    const [ListMenu] = useState(filtList)
    const filtItem = (category) => {
        if(category === 'All'){
            setmenuData(Menu)
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setmenuData(updatedList);
    }
    return (
        <div>
        <Navbar filterItem = {filtItem} ListMenu = {ListMenu} />
        <MenuCard menuData = {menuData}/>
        </div>
    )
}

export default Restaurant
