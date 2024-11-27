import React from 'react'
import './Contact.css'

function ContactUs() {
  return (
    <div className="container">
        <div className="contact-us-container">
           <div className="contact-details">
           <h1>Contact Us</h1>
            <p >
            We'd love to hear from you. Please fill out the form below or reach out
            to us using the contact details provided.
            </p>
           </div>
            <form className='contact-form'>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id='message' rows='5' required></textarea>
                </div>
                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs