import React, { useState } from 'react';
import styles from "./faqsection.module.css"
import flutterImage from "../assets/image 9.png";
import paystackImage from "../assets/image 10.png";
import monifyImage from "../assets/image 8.png";

const FAQSection = () => {
    const [activeTab, setActiveTab] = useState('schools');
    const [accordion, setAccordion] = useState(0);

    const schoolFAQs = [
        {
            title: "How do I upload bills for a new term on the school portal?",
            description:
                `          <ol>
                    <li>Log In: Access your portal with your credentials.</li>
                    <li>Navigate to Finance: Click on the Finance tab from the main dashboard.</li>
                    <li>Select Student Bills : Within the Finance section, select “Student Bills”.</li>
                    <li>Choose the Class : Pick the class for which you want to upload the bill.</li>
                    <li>Add a New Bill: Click on  "Add Class Bill."</li>
                    <li>Enter Bill Details:
                        - Narration/Description: Type in a brief description of the bill.
                        - Amount: Enter the bill amount.</li>
                    <li>Specify Bill Type:
                        - If the bill applies to both boarders and day students, select the "ANY" tab.
                        Set Due Date: Enter the date by which the bill should be paid. </li>
                    <li>Set Due Date: Enter the date by which the bill should be paid.</li>
                    <li>Determine Priority Level: Choose the appropriate priority level (e.g. Level 1 for urgent bills). </li>
                    <li>Select Bank Account: Go to the  "Account" tab and choose the bank account where the bill should be settled.</li>
                    <li>Save/Submit: Review the information and click to save or submit the bill.</li>
                </ol>`
        },
        {
            title: "How do I apply a discount to a student’s bill?",
            description: `<ol>
                <li>Log into the admin portal</li>
                <li>Click on  'Student Bills' under the finance menu</li>
                <li>Click inside the bar at the top of the class list to switch to 2nd Term Bills</li>
                <li>Select a class with prepared bills  e.g grade 2</li>
                <li>Click on the first icon labelled detailed bill in front of the student you wish to apply the varied discount for</li>
                <li>Click on 'Edit' in front of the bill you wish to apply the discount to</li>
                <li>Edit the bill amount to the discounted amount</li>
                <li>Click 'Save' next to the bill to save your entry.</li>
                <li>At the bottom of the page under the bar labelled 'Bill/Payment' notes, Write a description of the percentage discount that was applied to that bill, then click outside the bar to save the note :  (this note will reflect on the student's invoice on the parent's portal when they view the bill at the point of payment)</li>
            </ol>`
        },
        {
            title: "Payment not reflecting on the portal?",
            description: "Kindly reach out to our customer support team with the receipt of the transaction for us to be able to track the transaction."
        },
        {
            title: "How do I apply credit to a student’s bill?",
            description: `<ol>
                <li>   Log in to the portal and go to “Student Bills” under the Finance feature.</li>
                <li>Search for the student and then click on the “Detailed Bills"</li>
                <li>Find the “Credit” button on the far right of each of the students' bills and then click on it.</li>
                <li>Input the total amount of credit based on the amount the student has cleared from their bills outside the portal directly to the school’s account.</li>
                <li>Do this for each bill item till credit of the exam amount of the bill item has been added to all the bill items if the student has already cleared all bills.</li>
            </ol>`
        },
        {
            title: "How do I download the statement of account for all payments made?",
            description: `<ol>
                    <li>Click on 'settlement log' under the finance menu</li>
                <li>Scroll down to the end of the page and click on 'Download Settlements'</li>
                </ol>`
        },
        {
            title: "How can I add a bill for a student?",
        },
        {
            title: "How do I get a breakdown of all amounts settled in the school’s account?",
            description: `<ol>
                <li>Click on 'settlement log' under the finance menu</li>
                <li>Scroll down to the end of the page and click on 'Download Settlements'</li>
                <li>Click on the ‘details’ tab under ‘transactions’ column to view more detailed record of payments settled into the school’s account</li>
            </ol>`
        },
        {
            title: "How can I generate virtual account numbers?",
            description: `<ol>
                <li>Log into the admin portal </li>
                <li>Click on the finance menu and select 'Student accounts'</li>
                <li>The page will open Grade 1 students by default. Click on 'Generate accounts' in green color at the top of the page</li>
                <li>A pop up dialogue will keep coming up at intervals while the page is still loading, continue to click on 'ok' anytime it pops up.  Wait for the page to load completely.</li>
                <li>Once all the account numbers for Grade 1 students are generated, click on Grade 2 class to continue to do the same for the students.</li>
            </ol>`
        },

    ];

    const parentFAQs = [
        {
            title: "How do I get/view a receipt for the bills I paid?",
            description: `<ol>
                <li>Log into the portal and click on 'view fees' </li>
                <li>Next, click on 'payment receipts'</li>
            </ol>`
        },
        {
            title: "What are the steps for paying fees?",
            description: `<ol>
                <li>Navigate to the "Bills and Fees" section on the dashboard. Then click on "View Fees" to review the bill.</li>
                <li>Copy the Dedicated Student's Bank Account Number located under the wallet account balance.</li>
                <li>Process a deposit into the Student's Wallet using the copied account number</li>
                <li>After completing the payment, return to the "Bills and Fees" page on the portal.</li>
                <li>Scroll to the bottom of the page and select 'Pay via Wallet Balance.' from the 'Payment method' dialogue box</li>
                <li>Click on the 'PAY NOW' button.</li>
            </ol>`
        },
        {
            title: "How do I fund my wallet?",
            description: `<ol>
                <li>Log into the parent's portal</li>
                <li>Navigate to the "Bills and Fees" section on the dashboard. Then click on "View Fees" to review the bill.</li>
                <li>Copy the Dedicated Student's Bank Account Number located under the wallet account balance.</li>
                <li> Process a deposit into the Student's Wallet using the copied account number.</li>
            </ol>`
        },
        {
            title: "Payment not reflecting on the portal?",
            description: "Kindly reach out to our customer support team with the receipt of the transaction for us to be able to track the transaction."
        },
    ];

    const renderFAQs = (questions) => (
        <div className="row">
            {questions.map((q, idx) => (
                <div className="col-md-6 mb-3 d-flex justify-content-between align-items-center" key={idx}>
                    <p className="mb-0">
                        <span>{q.title}</span>
                        {accordion === 1 && <span dangerouslySetInnerHTML={{ __html: q.description }} />}
                    </p>
                    <div className={styles.plus}>
                        <span className="fs-4" onClick={() => setAccordion(1)}>+</span>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="py-5 text-center px-3">
            <h2 className="fw-bold mb-4">Frequently asked questions</h2>

            {/* Toggle Buttons */}
            <div className="d-inline-flex mb-5 bg-secondary p-1 rounded-3">
                <button
                    className={`btn btn-sm px-4 ${activeTab === 'schools' ? 'btn-light text-black' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('schools')}
                >
                    For schools
                </button>
                <button
                    className={`btn btn-sm px-4 ${activeTab === 'parents' ? 'btn-light text-black' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('parents')}
                >
                    For parents
                </button>
            </div>

            {/* FAQs */}
            <div className="container">
                {activeTab === 'schools' ? renderFAQs(schoolFAQs) : renderFAQs(parentFAQs)}
            </div>

            {/* Footer Logos */}
            <div className="text-center mt-5">
                <p className="text-uppercase fw-medium small mb-4">P o w e r e d <span className='px-1'>B y</span></p>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <img src={flutterImage} alt="Flutterwave" height="30" />
                    <img src={paystackImage} alt="Paystack" height="30" />
                    <img src={monifyImage} alt="Monnify" height="20" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
