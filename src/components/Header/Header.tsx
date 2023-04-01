import React from 'react'
import moon from '../../assets/images/moon.png'
import { Link } from 'react-router-dom'
import s from './Header.module.css'


function Header() {
    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h1 className={s.headerTitle}>CountriesApp</h1></Link>
                <div className={s.mode}>
                    <img className={s.modeImage} src={moon} />
                    <span className={s.modeTitle}>Dark Mode</span>
                </div>
            </div>
        </header>
    )
}

export default Header