import React, {useEffect} from "react"
import './footer.css'
import video2 from '../../Assets/video2.mp4'

import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{

    useEffect(()=>{
        Aos.init({duration: 1000})
      }, [])



    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel witch us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND      <FiSend className="icon"/>
                        </button>
                    </div>

                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon" /> Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                        Welcome to Travel, your gateway to extraordinary journeys and unforgettable adventures. Explore our curated selection of destinations, discover hidden gems, and embark on a voyage of a lifetime. Let Travel be your compass to the world's wonders, making every moment an opportunity to create lasting memories. Start your journey with us and let the exploration begin!
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/>
                        <AiOutlineYoutube className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* --------- Group One ------ */}
                        <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Payment
                            </li>
                        </div>

                        {/* --------- Group Two ------ */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> TripAdvisor
                            </li>
                        </div>

                        {/* --------- Group Three ------ */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/> Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEB SITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Footer