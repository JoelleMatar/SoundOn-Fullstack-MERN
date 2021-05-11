import React from 'react';
import Carousel1 from '../images/carrousel1.png';
import Carousel2 from '../images/carrousel2.png';
import Carousel3 from '../images/carrousel3.png';
import Instruments from '../images/Instruments.png';
import Accessories from '../images/accessory.jpg';
import Artists from '../images/artist2.jpg';
import About from '../images/piano1.jpg';
import {Link} from 'react-router-dom';

const HomeSections = () => {
    return (
        <div>
            <div className="container-fluid" id="carouselcontainer">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={Carousel1} alt="Live Like a Beat" />
                        </div>

                        <div className="item">
                            <img src={Carousel2} alt="Brands from all over the World" />
                        </div>

                        <div className="item">
                            <img src={Carousel3} alt="Best Instruments for our Best Musicians" />
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/>
            <section>
                <div className="container-fluid" id="containerImages">
                    <div className="bs-row gutter-row">
                        <div className="col-md-6">
                            <div className="instruments">
                                <Link to="/GuitarList">
                                    <img src={Instruments} alt="Instruments" className="instrumentsImg mx-auto d-block"/>
                                    <h3 className="bottom-overlay-text">Instruments Categories</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div>
                                <div className="col-sm-6 accessory">
                                    <Link to="/Contact">
                                        <img src={Accessories} alt="Accessories" className="accessoriesImg mx-auto d-block"/>
                                        <h3 className="bottom-overlay-text">Contact Us</h3>
                                    </Link>
                                </div>

                                <div className="col-sm-6 artist">
                                    <Link to="/login">
                                        <img src={Artists} alt="Artists" className="accessoriesImg mx-auto d-block"/>
                                        <h3 className="bottom-overlay-text">Sign Up Now</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="about">
                                    <Link to="/About">
                                        <img src={About} alt="About us" className="aboutImg mx-auto d-block"/>
                                        <h3 className="bottom-overlay-text">About Sound On</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSections