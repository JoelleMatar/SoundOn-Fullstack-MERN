import React from 'react';
import Store from '../images/contactGuitarBg.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id="bodyContact">
            <section>
                <div className="container-fluid contactInfoSection text-center">
                    <div className="row justify-content-center">
                        <div id="info">
                            <h3>Contact</h3>
                            <address>
                                Sin el Fil,<br />
                                Jisr el Bacha,<br />
                                Lebanon<br /><br />
                                <label>Phone: +961 81 242 992</label><br />
                                <label>Mail: <Link to="soundon@hotmail.com">soundon@hotmail.com</Link></label>
                            </address>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="container formContDiv text-center">
                    <p>Fill out this form and let us know what we can help you with!</p>
                    <div className="row ">
                        <div className="col-lg-12 mx-auto">
                            <div className="mt-2 mx-auto p-4 bg-light">
                                <div className="bg-light">
                                    <div className="container infoContact">
                                        <form id="contact-form" role="form">
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group"><input id="form_name" type="text" name="name"
                                                            className="form-control" placeholder="Please enter your firstname *"
                                                            required="required" data-error="Firstname is required." /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group"><input id="form_lastname" type="text"
                                                            name="surname" className="form-control"
                                                            placeholder="Please enter your lastname *" required="required"
                                                            data-error="Lastname is required." /> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group"><input id="form_email" type="email" name="email"
                                                            className="form-control" placeholder="Please enter your email *"
                                                            required="required" data-error="Valid email is required." /> </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group"><input id="form_email" type="tel" name="email"
                                                            className="form-control"
                                                            placeholder="Please enter your phone number *"
                                                            required="required" data-error="Valid email is required." /></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group"><textarea id="form_message" name="message"
                                                            className="form-control" placeholder="Write your message here."
                                                            rows="4" required="required"
                                                            data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                    <div className="col-md-12"> <input type="submit"
                                                        className="btn btn-send pt-2 btn-block " value="Send Message"
                                                        style={{borderRadius: "0"}} /> </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="mapContact">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sin%20El%20Fil,%20Jisr%20El%20Bacha,%20Lebanon+(Sound%20On%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>

            <br />
        </div>
    )
}

export default Contact