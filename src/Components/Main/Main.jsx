import React, {useEffect} from "react"
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from '../../Assets/images/image (1).jpg';
import img2 from '../../Assets/images/image (2).jpg';
import img3 from '../../Assets/images/image (3).jpg';
import img4 from '../../Assets/images/image (4).jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: 'Paris, France',
      location: 'Europe',
      grade: 4.7,
      fees: '$200',
      description: 'Explore the romantic streets of Paris and visit iconic landmarks like the Eiffel Tower.',
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Tokyo, Japan',
      location: 'Asia',
      grade: 4.5,
      fees: '$250',
      description: 'Experience the blend of modernity and tradition in the bustling metropolis of Tokyo.',
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'New York City, USA',
      location: 'North America',
      grade: 4.8,
      fees: '$300',
      description: 'Discover the city that never sleeps with its iconic skyline and diverse neighborhoods.',
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Cape Town, South Africa',
      location: 'Africa',
      grade: 4.6,
      fees: '$180',
      description: 'Experience the stunning landscapes and rich culture of Cape Town on the southern tip of Africa.',
    },
    /*{
      id: 5,
      imgSrc: img,
      destTitle: 'Sydney, Australia',
      location: 'Oceania',
      grade: 4.9,
      fees: '$280',
      description: 'Explore the vibrant city of Sydney with its iconic Opera House and beautiful beaches.',
    },
    {
      id: 6,
      imgSrc: img,
      destTitle: 'Rio de Janeiro, Brazil',
      location: 'South America',
      grade: 4.4,
      fees: '$220',
      description: 'Enjoy the energetic vibes of Rio de Janeiro, known for its lively carnivals and scenic landscapes.',
    },
    {
      id: 7,
      imgSrc: img,
      destTitle: 'Bangkok, Thailand',
      location: 'Asia',
      grade: 4.3,
      fees: '$190',
      description: 'Immerse yourself in the vibrant street life and rich cultural heritage of Bangkok.',
    },
    {
      id: 8,
      imgSrc: img,
      destTitle: 'Rome, Italy',
      location: 'Europe',
      grade: 4.7,
      fees: '$270',
      description: 'Step back in time and explore the historical wonders of Rome, from the Colosseum to the Vatican.',
    },
    {
      id: 9,
      imgSrc: img,
      destTitle: 'Marrakech, Morocco',
      location: 'Africa',
      grade: 4.5,
      fees: '$210',
      description: 'Experience the exotic blend of vibrant markets, stunning architecture, and Moroccan hospitality.',
    },
    {
      id: 10,
      imgSrc: img,
      destTitle: 'Auckland, New Zealand',
      location: 'Oceania',
      grade: 4.6,
      fees: '$240',
      description: 'Discover the natural beauty and cultural diversity of Auckland, surrounded by stunning landscapes.',
    },*/
]


const Main = () =>{
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])




    return(
        <section className="main container section">
            <div className="secTitle">
                <h3  data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDev">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent felx">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">  {location}</span>
                                    
                                    </span>

                                    <dev className="fees flex">
                                        <dev className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </dev>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </dev>


                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex"> 
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main