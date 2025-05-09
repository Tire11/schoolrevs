import React from 'react'
import styles from "./home.module.css"
import WhatWeOffer from '../../components/WhatWeOffer';
import WhyChooseUs from '../../components/WhyChooseUs';
import HowItWorks from '../../components/HowItWorks';
import FAQSection from '../../components/FAQSection';
import dashboardImg from '../../assets/School-Fees.png';


const Home = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.wrapper}>
                    {/* Left Side - Heading */}
                    <div>
                        <h1 className={styles.heading}>Revolutionising <br /> School Payment.</h1>
                    </div>

                    {/* Right Side - Description & Buttons */}
                    <div className={styles.headingSibling}>
                        <p className={styles.description}>
                            Say goodbye to outdated, complex <br /> financial systems. Our platform simplifies <br />
                            and streamlines payment management for <br /> schools and parents.
                        </p>
                        <div className={styles.buttonGroup}>
                            <button className={styles.studentButton}>For Students</button>
                            <button className={styles.parentButton}>For Parents</button>
                        </div>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <img className={styles.dashboardImg} src={dashboardImg} alt="" />
                </div>
            </section>
            <WhatWeOffer />
            <WhyChooseUs />
            <HowItWorks />
            <FAQSection />
        </>
    );
};

export default Home;



// const Home = () => {
//     return (
//         <div className={styles.firstSection}>
//             <div className="container">
//                 <div className="col-sm-12">
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <p className={styles.heading}>Revolutionising School Payment.</p>
//                         </div>
//                         <div className="col-sm-6">
//                             <span>Say goodbye to outdated, complex financial systems. Our platform simplifies and streamlines payment management for schools and parents.</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home