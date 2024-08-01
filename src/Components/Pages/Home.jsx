import React from 'react';
import Slider from "./Slider";
import {Link} from "react-router-dom";
import slider2 from "../Images/slider2.jpeg";
import slider1 from "../Images/slider1.jpeg";
import slider3  from "../Images/slider3.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
   
    <Slider/>
    <section className='section'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className='section-main-heading'> Company</h1>
                    <div className='underline mx-auto'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur esse, odit numquam obcaecati, eius eos ullam doloribus rerum cupiditate necessitatibus aperiam molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit, aperiam a, vel error ipsum maiores nihil veritatis non rem repudiandae alias optio.</p>
                    <Link to="/About" className='btn btn-primary  shadow'>Read More</Link>

                </div>
            </div>
        </div>

    </section>
    {/* vision,mission,core */}

    <section className='section bg-c-light'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-4">
                    <h1 className='section-main-heading'>Vision and Mission</h1>
                    <div className='underline mx-auto'></div>
                </div>
                <div className="col-md-4 text-center">
                    <h1>Vision</h1>
                  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus atque a ratione enim corrupti adipisci exercitationem molestiae natus voluptatibus! Ipsa, vitae? Iusto accusamus repellendus ad libero animi non perferendis fuga laudantium natus?</p>
                </div>
                <div className="col-md-4 text-center ">
                
                    <h1>misssion</h1>
                  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus atque a ratione enim corrupti adipisci exercitationem molestiae natus voluptatibus! Ipsa, vitae? Iusto accusamus repellendus ad libero animi non perferendis fuga laudantium natus?</p>
                </div>
                <div className="col-md-4 text-center  ">
                    <h1>Core</h1>
             
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus atque a ratione enim corrupti adipisci exercitationem molestiae natus voluptatibus! Ipsa, vitae? Iusto accusamus repellendus ad libero animi non perferendis fuga laudantium natus?</p>
                    

                </div>
                

            </div>
        </div>

    </section>

    {/* my services */}

    <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Services</h1>
                    <div className='underline mx-auto'></div>
                   
                </div>
                <div className="col-md-4">
                        <div className="card shadow">
                            <img src={slider2} alt="" />
                            <hr />
                            <div className="card-body">
                                <h3>services1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat, commodi ex magnam provident asperiores corporis consequatur voluptatum, eveniet aspernatur dolores reiciendis quae!</p>
                            </div>
                            <Link to="/services" className='btn btn-link'>Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={slider2} alt="" />
                            <hr />
                            <div className="card-body">
                                <h3>services2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat, commodi ex magnam provident asperiores corporis consequatur voluptatum, eveniet aspernatur dolores reiciendis quae!</p>
                            </div>
                            <Link to="/services" className='btn btn-link'>Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={slider2} alt="" />
                            <hr />
                            <div className="card-body">
                                <h3>services3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat, commodi ex magnam provident asperiores corporis consequatur voluptatum, eveniet aspernatur dolores reiciendis quae!</p>
                            </div>
                            <Link to="/services" className='btn btn-link'>Read More</Link>
                        </div>
                        
                    </div>
            </div>
        </div>
    </section>

    {/* footer */}

 <Footer/>
    </>
  )
}
export default Home;