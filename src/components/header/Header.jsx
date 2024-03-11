import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [activeMenu, setActiveMenu] = useState(false)

    const handleMenuClick = (index) => {
        setActiveMenu(index)
        setActiveMenu(!activeMenu)
    }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-menu'>
            <div className='logo'>
                <Link to='/'>Tenders.kg</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink onClick={() => handleMenuClick(0)} className={activeMenu === 0 ? "active" : ""} to='/'>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleMenuClick(1)} className={activeMenu === 1 ? "active" : ""} to='/contest'>Конкурсы</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleMenuClick(2)} className={activeMenu === 2 ? "active" : ""} to='/auction'>Аукционы</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleMenuClick(3)} className={activeMenu === 3 ? "active" : ""} to='/tender'>Тендеры</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleMenuClick(4)} className={activeMenu === 4 ? "active" : ""} to='/grant'>Гранты</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleMenuClick(5)} className={activeMenu === 5 ? "active" : ""} to='/other'>Ище 
                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1H2L7 7.5L12 1Z" fill="white" stroke="white"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='header-btns'>
            <button>
                <NavLink to='/authentication'>Войти</NavLink>
            </button>
            <button>
                <NavLink to='/registration'>Регистрация</NavLink>
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header
