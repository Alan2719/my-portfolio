import React from 'react';
import ContactInfo from "../info";
import Jumbotron from "../jumbotron";
import Container from "../infoContainer";
import Row from "../../components/projectsContainer";
import Image from "../../Images/Alan2.jpg";
import "../../styles/about.css";
import Footer from "../footer";

function About () {
    return(
        <>
        <ContactInfo />
        <Jumbotron />
        <Container>
            <Row>
                <h4>About Me</h4>
            </Row>
            <Row>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-4 picture">
                <div class="card">
                    <img src={Image} class="card-img-top" alt="..."></img>
                </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-8 text">
                <div class="card-body">
                    <div class="text1 fade-text">
                        <p class="card-text text">
                        Full Stack Web Developer and automotive design engineer, both imparted by Tecnológico de Monterrey. Recently earned the certificate that endorses as a full-stack web developer with knowledge in HTML, CSS, Javascript, Nodejs, React.js, MySQL, Mongo, and responsive web design. Passionate about developing different kind of application that involves a full solution, from the starting design until the final solution. My goal is to develop useful and efficient applications that can make any type of process easier and agile for all users. Fluent in Spanish and English. 

                        </p>
                    </div>
                </div>
            </div>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default About;