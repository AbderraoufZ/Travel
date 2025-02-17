import React, {useState} from "react"
import './navbar.css'
import {MdModeOfTravel} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () =>{
    const[active, setActive]= useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNav = ()=>{
        setActive('navBar')
    }
    return(
        <section class=" navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>   Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#"> BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <PiDotsNineBold className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar