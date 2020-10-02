import React from "react";
import "../styles/header.css";
import Image from "../Images/Alan3.JPG"
import "../styles/infoContact.css";

function ContactInfo () {
    return (
        <div className="jumbotron .info-cont">
            <div className="container-fluid wrapper-box">
                <div className="row">
                    <div className="col-md-3 image-alan">
                        <img src={Image} alt="Alan Velazquez" className="image-alan2 rounded-circle align-self-center mr-3 imagew"></img>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <h4>Contact Information</h4>
                        </div>
                        <div className="row">
                            <div className="col-4 col-lg-4 col-md-6 media-body">
                                <ul className="contacts">
                                    <li className="list-contact"><i className="fas fa-envelope"></i><span> alan2719.ahcv@gmail.com</span></li>
                                    <li className="list-contact"><a href="https://www.linkedin.com/in/alan-vel%C3%A1zquez-mart%C3%ADnez-309769a4/" target="_blank" rel="noreferrer noopener" className="contact-link2"><i className="fab fa-linkedin"></i><span> Alan Velázquez Martínez</span></a></li>
                                </ul>
                            </div>
                            <div className="col-4 col-lg-4 col-md-6">
                                <ul className="contacts">
                                    <li className="list-contact"><a href="https://github.com/Alan2719" target="_blank" rel="noreferrer noopener" className="contact-link2"><i className="fab fa-github" target="_blank"></i><span> Alan2719</span></a></li>
                                    <li className="list-contact"><a href="https://www.facebook.com/alan.velazquezmartinez" target="_blank" rel="noreferrer noopener" className="contact-link2"><i className="fab fa-facebook-square"></i><span> Alan Velázquez</span></a></li>
                                </ul>
                            </div>
                            <div className="col-4 col-lg-4 col-md-6">
                                <ul className="contacts">
                                    <li className="list-contact"><a href="https://www.instagram.com/alanvem/" target="_blank" rel="noreferrer noopener" className="contact-link2"><i className="fab fa-instagram-square" id="ig"></i><span> alanvem</span></a></li>
                                    <li className="list-contact"><i class="fas fa-phone"></i> <span>55-54-37-90-45</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;