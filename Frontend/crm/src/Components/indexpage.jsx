import React from "react";
import "./indexpage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login"
import myImage from "../images/image1.jpg"
import myImage1 from "../images/image2.jpg"
import myImage2 from "../images/image3.jpg"
import myImage3 from "../images/image4.png"
import myImage4 from "../images/image5.jpg"
import myImage5 from "../images/image6.jpg"
import logo from "../images/logo.png"
import Footer from "./Footer";


const images = [
    myImage,
    myImage2,
    myImage3,
    myImage3,
    myImage4,
    myImage5
    // Add more image URLs here as needed
];

const IndexPage = () => {
    const AboutUs = () => (
        <div>
            <h2>About Us</h2>
            <p>Place your about us content here...</p>
        </div>
    );

    const ContactUs = () => (
        <div>
            <h2>Contact Us</h2>
            <p>Place your contact us content here...</p>
        </div>
    );

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            <nav className="navbar navbar-light bg-dark index">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" to="/" >
                        <img src={logo} alt="" width="60" height="50" />
                    </NavLink>
                    <NavLink className="btn btn-primary" to="/signin">Signup Here</NavLink>
                </div>
            </nav>
            <div className="row justify-content-center index">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <NavLink to="/About" className="nav-link active" aria-current="true">
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Client's Matrix</h5>
                            <p className="card-text">
                                "Client Matrix redefines CRM solutions, streamlining customer interactions with its intuitive platform. Seamlessly manage leads, enhance client relationships, and optimize sales pipelines. Empower your business with cutting-edge technology, robust analytics, and a user-centric approach, all within Client Matrix's dynamic framework."
                            </p>
                            <NavLink to="/login" className="btn btn-primary">
                                Let's Begin
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel className="carousel"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {images.map((image, index) => (
                    <img src={image} alt={`image-${index}`} key={index} className="carsel" />
                ))}
            </Carousel>
            <div className="row details">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About Us</h5>
                            <p className="card-text">Our new CRM is a comprehensive solution designed to revolutionize your business operations. Packed with an array of cutting-edge features, it streamlines and enhances customer relationship management to elevate your business to new heights.

                                This CRM offers a user-centric interface, empowering your teams to effortlessly manage leads, optimize sales pipelines, and nurture client relationships. With intuitive dashboards and analytics, gain deep insights into customer interactions, enabling informed decision-making.

                                Experience seamless integration across departments, ensuring efficient collaboration and communication. Automate routine tasks, saving time and increasing productivity. Customizable workflows cater to your unique business needs, adapting to your processes for optimal efficiency.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>
                            <p className="card-text">Our doors are always open for collaboration, inquiries, or assistance. Contact us today for tailored solutions that align with your business objectives. Whether you seek technical support, wish to explore partnership opportunities, or have queries about our services, our dedicated team is here to assist. Reach out via phone, email, or drop by our office to engage with our enthusiastic professionals. We value your feedback and aim to provide prompt, effective solutions to meet your needs. Your success is our priority, and we're committed to fostering enduring partnerships. Let's connect and embark on a journey toward mutual growth and prosperity.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/About" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/signin" element={<Login />}></Route>

            </Routes>
            <Footer />
        </>
    );
};

export default IndexPage;