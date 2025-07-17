import "../../FreelanceAndDeveloper/css/component/Contact.css";
import { useState } from "react";
import contactPage from "../json/contactPage";

const Contact = () => {
    const [option, setOption] = useState("Hire");

    return (
       <div>
        <h1 style={{textAlign:"center", color:"var(--third)"}}>Contact Me</h1>
         <section className="contact-container">
            {/* Left Side */}
            <div className="contact-left">
                {contactPage.map((item) => (
                    <div className="contact-info" key={item.id}>
                        <div className="contact-icon">{item.icon}</div>
                        <div className="contact-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                <div className="map">
                    <iframe
                        title="T Nagar Chennai"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.563685544024!2d80.22835408375943!3d13.042614550753813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1752487457073!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


            </div>

            {/* Right Side */}
            <div className="contact-right">
                <div className="option-buttons">
                    <button
                        className={option === "Hire" ? "active" : ""}
                        onClick={() => setOption("Hire")}
                    >
                        Contact
                    </button>
                    <button
                        className={option === "Freelance" ? "active" : ""}
                        onClick={() => setOption("Freelance")}
                    >
                        Freelance
                    </button>
                </div>

                <form>
                    {option === "Hire" ? (
                        <>
                            <div className="row">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <input type="text" placeholder="Subject" required />
                                <textarea rows="5" placeholder="Message" required></textarea>
                            </div>


                        </>
                    ) : (
                        <>
                            <div className="row">
                                <input type="text" placeholder="Project Name" required />
                                <input type="number" placeholder="Budget ($)" required />
                                <input type="date" placeholder="Deadline" required />
                                <textarea rows="5" placeholder="Project Description" required></textarea>
                            </div>


                        </>
                    )}
                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
            </div>
        </section>
       </div>
    );
};

export default Contact;
