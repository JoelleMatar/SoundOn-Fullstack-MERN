import React from 'react';
import Piano from '../images/piano3.jpg';
import Store from '../images/store.jpg';

const About = () => {
    return (
        <div>
            <section>
                <div className="container-fluid aboutSections text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xs-12">
                            <img src={Store} alt="Sound On Store" width="90%" height="90%" />
                        </div>
                        <div className="col-md-5 col-xs-12 aboutDivs align-self-center" style={{ verticalAlign: "middle"}}>
                            <h1>Who We Are</h1>
                            <p>Sound On is a music instruments store opened in 2018 by its owner Joelle Matar.
                                The main reason behind this store is her passion about music, which is why she wanted
                                to provide the best instruments and accessories for musicians. Sound On focuses on
                                musicians of all ages and offers them guitars, pianos and drums services online.
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xs-12" style={{ verticalAlign: "middle"}}>
                            <h1>Our Mission</h1>
                        </div>
                        <section id="featured-services" className="featured-services">
                            <div className="container" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <p className="description">Make the purchasing process of musical instruments and accessories easier</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div className="icon-box rect" data-aos="fade-up" data-aos-delay="200">
                                            <p className="description">Save time spent shopping live at the store</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div className="icon-box rect" data-aos="fade-up" data-aos-delay="300">
                                            <p className="description">Help musicians manage their time better</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div className="icon-box rect" data-aos="fade-up" data-aos-delay="400">
                                            <p className="description">Shop at any time with same quality of service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <hr />
                    
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xs-12">
                            <img src={Piano} alt="Sound On Store" width="90%" height="90%" />
                        </div>
                        <div className="col-md-5 col-xs-12 aboutDivs align-self-center" style={{ verticalAlign: "middle"}}>
                            <h1>Our Vision</h1>
                            <p>We hope by the end of 2023 to be one of the most known online music instruments e-commerce shop
                                and to have grown our business to include violin, saxophone, trompette and my many more. As well
                                opening a new branch in Lebanon for teaching music courses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
        </div>
        
    )
}

export default About