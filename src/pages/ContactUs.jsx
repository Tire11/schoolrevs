// ContactUs.jsx
import React from 'react';
import styles from './contactus.module.css';

const ContactUs = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactRow}>
                {/* Form Section */}
                <div className={styles.contactForm}>
                    <h1 className={styles.contactHeading}>Contact Us</h1>
                    <form>
                        <div>
                            <label>Full Name</label>
                            <input type="text" placeholder="Your full name" className={styles.formInput} />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder="Your email address" className={styles.formInput} />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Your phone number" className={styles.formInput} />
                        </div>
                        <div>
                            <label>Your Message</label>
                            <textarea placeholder="Enter Message" className={styles.formTextarea}></textarea>
                        </div>
                        <button type="submit" className={styles.sendButton}>Send</button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className={styles.contactInfo}>
                    <div>
                        <p className={styles.infoHeading}>Call Us</p>
                        <p className={styles.infoText}>
                            +234-012914298.<br />
                            +234-705-394-4592<br />
                            +234-705-394-4594<br />
                            +1-888-705-0968
                        </p>
                    </div>

                    <div>
                        <p className={styles.infoHeading}>Email Us</p>
                        <p className={styles.infoText}>support@schoolteller.ng</p>
                    </div>

                    <div>
                        <p className={styles.infoHeading}>Address</p>
                        <p className={styles.infoText}>
                            12, Ajisafe Street, Ikeja GRA, Ikeja, Lagos,<br /> Nigeria
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
