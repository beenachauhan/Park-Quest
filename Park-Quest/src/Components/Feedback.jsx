import React, { useState } from 'react';
import "../assets/css/Feedback.css"
import Header from './Header';
import Footer from './Footer';

const Feedback = ({ onNav, theme, toggleTheme }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [feedbackError, setFeedbackError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'fullName' && value.trim()) {
      setNameError('');
    }

    if (name === 'email' && value.includes('@')) {
      setEmailError('');
    }

    if (name === 'feedback' && value.trim()) {
      setFeedbackError('');
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!formData.fullName.trim()) {
      setNameError('Please enter your full name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!formData.email.includes('@') || !formData.email.trim()) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!formData.feedback.trim()) {
      setFeedbackError('Please enter your feedback.');
      isValid = false;
    } else {
      setFeedbackError('');
    }

    if (isValid) {
      // You can submit the form data here
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <div className="feedback-container">
        {!submitted ? (
          <>
            <h2 className='form-title'>Feedback</h2>
            <div className='image-container'>
              <div className="image-section">
                <img className='image'
                  src="/public/images/Feedback.jpg"
                  alt="Feedback"
                />
              </div>

              <div className="form-content">
                <h3>Required fields are marked with *</h3>
                <form className='form' onSubmit={handleSubmitForm}>

                  <label className='name-label' htmlFor="fullName">Full Name: *</label>
                  <input className='name-input'
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {nameError && <p className='error-message'>{nameError}</p>}

                  <label className='email-label' htmlFor="email">Email: *</label>
                  <input className='email'
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {emailError && <p className='error-message'>{emailError}</p>}

                  <label className='feedback-label' htmlFor="feedback">Write a review: *</label>
                  <textarea className='feedback'
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                  ></textarea>
                  {feedbackError && <p className='error-message'>{feedbackError}</p>}

                  <button className='submit-button' type="submit">Submit</button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
            <img
              src="/public/images/Thank you.png"
              alt="Thank You"
              className='thankyou-image'
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
