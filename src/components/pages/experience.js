import React from 'react';
import Container from "../container";
import Image from "../../Images/Seal.jpg";
import Image2 from "../../Images/Ford.jpg";
import "../../styles/experience.css";

function Experience() {

    return(
        <Container>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={Image2} class="card-img" alt="..."></img>
                    </div>
                    <div class="col-md-8 experience-card">
                    <div class="card-body experience-card">
                        <h6 class="card-title experience-text">Ford Motor Company | February 2020 | Junior Engineer</h6>
                        <p class="card-text experience-text">The main role as an engineer was to find a solution for a Key Initiative inside the company in which the main purpose was to create a collaborative platform that allows all employees from Ford Mexico, to develop and share new ideas for the company. Present-day, the platform is still in the development process. Also, this platform has been tested with pilot groups, bigger groups every time to have better feedback and develop the best possible product.  
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={Image} class="card-img" alt="..."></img>
                    </div>
                    <div class="col-md-8 experience-card">
                    <div class="card-body experience-card">
                        <h6 class="card-title experience-text">Eagleburgmann | June 2018 - May 2019 | Project Engineer</h6>
                        <p class="card-text experience-text">The main role as a project engineer was to deliver mechanical seal quotations for the different subsidiaries in Latin America, North America, and Europe, always ensuring good communication. The final cost of the product was obtained by calculating the cost of labor, cost of material, quantity of material, and the manufacturing process. Good communication between the technicians and engineers was key in this process. 
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    )   

}

export default Experience;