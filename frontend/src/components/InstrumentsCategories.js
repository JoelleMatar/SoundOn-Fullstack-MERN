import React, { Component } from 'react';
import Guitar from '../images/guitaar.webp';
import Piano from '../images/pianoSet.jpg';
import Drums from '../images/drumsSet.jpg';
import {Link} from 'react-router-dom';

class InstrumentsCategories extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container-fluid text-center" id="InstrumentsCategories">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-xs-12 categories" id="guitarCategoryInstrument">
                                <Link to="/GuitarList" className="linksToLists">
                                    <img className="card-img-top cardImg" src={Guitar} width="90%" height="90%" alt="Guitar Instruments List" />
                                    <div className="card-body">
                                        <p className="card-text">View Available List of Guitars</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-4 col-xs-12 categories" id="pianoCategoryInstrument">
                                <Link to="/PianoList" className="linksToLists">
                                    <img className="card-img-top cardImg" src={Piano} width="90%" height="90%" alt="Guitar Instruments List" />
                                    <div className="card-body">
                                        <p className="card-text">View Available List of Pianos</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-4 col-xs-12 categories" id="drumCategoryInstrument">
                                <Link to="/DrumsList" className="linksToLists">
                                    <img className="card-img-top cardImg" src={Drums} width="90%" height="90%" alt="Guitar Instruments List" />
                                    <div className="card-body">
                                        <p className="card-text">View Available List of Drums</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default InstrumentsCategories