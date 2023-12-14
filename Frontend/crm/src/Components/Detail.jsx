import React from "react";
import "./indexpage.css"
const Details = () => {
    return (
        <>
            <div className="row">
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
        </>
    )
}
export default Details