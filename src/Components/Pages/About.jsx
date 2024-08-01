import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
  return (
    // <div className="container">
    //     <div className="row">
    //         <div className="col-md-12">
    //             <div className="card shadow">
    //                 <div className="card-body">
    //                     <h1>About details</h1>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div>
        <section className='section'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className='section-main-heading'>Our Company</h1>
                    <div className='underline mx-auto'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur esse, odit numquam obcaecati, eius eos ullam doloribus rerum cupiditate necessitatibus aperiam molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit, aperiam a, vel error ipsum maiores nihil veritatis non rem repudiandae alias optio.</p>
                    <Link to="/About" className='btn btn-primary  shadow'>Read More</Link>

                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default About