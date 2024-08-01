import React from 'react';
import {Link} from "react-router-dom"



const Footer = () => {
  return (
    <section className='section footer bg-dark text-light mt-4 '>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Company Information</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt iusto sit unde praesentium ipsa facere exercitationem esse culpa id deleniti quo ex quam, facilis illum, distinctio, delectus quaerat! Modi vero eum harum aut ratione!</p>
                </div>
                <div className="col-md-4 text-center">
                    <h2>Quick Links</h2>
                    <hr />
                    <div><Link to="/Home">Home</Link></div>
                    <div><Link to="/About">About</Link></div>
                    <div><Link to="/Contact">Contact us</Link></div>
                    <div><Link to="/services">Services</Link></div>
                </div>

                <div className="col-md-4 text-center">
                    <h2>Details</h2>
                    <hr />
                    <div><p>#052 | Ameerpet | Hyderabad | Telangana | 500038</p></div>
                    <div><p>XXX7834527</p></div>
                    <div><p>XXX67834567</p></div>
                    <div><p>abhilashajena43@gmail.com</p></div>
                </div>
            </div>
        </div>
        <h1 className='text-center'>@copyRight Reserved 2024</h1>
    </section>
  )
}

export default Footer