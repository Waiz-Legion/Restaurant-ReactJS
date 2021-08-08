import React from 'react'

const Navbar = ({filterItem, ListMenu}) => {
    
    return (
        <div>
            <nav className = 'navbar'>
                <div className = 'btn-group'>

                {
                    ListMenu.map((curElem) => {
                        return(
                            <button className = 'btn-group__item' onClick = {() => filterItem(curElem)}>{curElem}</button>
                        )
                    })
                }
                    
                    
                </div>
            </nav>
        </div>
    )
    /*on line 17
    <button className = 'btn-group__item' onClick = {() => filterItem('breakfast')}>Breakfast</button>
                    <button className = 'btn-group__item'  onClick = {() => filterItem('lunch')}>Lunch</button>
                    <button className = 'btn-group__item'  onClick = {() => filterItem('evening')}>Evening</button>
                    <button className = 'btn-group__item'  onClick = {() => filterItem('dinner')}>Dinner</button>*/
}

export default Navbar
