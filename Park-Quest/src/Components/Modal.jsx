import React, { useRef, useState } from 'react';
import '../assets/css/Modal.css';

function CustomModal({handlePayment}) {
  const modalRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelDate, setTravelDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [travelDateError, setTravelDateError] = useState('');
  const [globalError, setGlobalError] = useState('');

  const handleName = (e) => {
    if(!e.target.value.trim()){
      setNameError('Please enter your full name.');
    } else {
      setName(e.target.value);
      setNameError('');
    }
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    if (!e.target.value.includes('@') || !e.target.value.trim()) {
      setEmailError('Please enter a valid email address with @.');
      setEmail(e.target.value);
    } else {
      setEmail(e.target.value);
      setEmailError('');
    }
    setSubmitted(false);
  };

  const handleTravelers = (e) => {
    setTravelers(parseInt(e.target.value, 10));
    setSubmitted(false);
  };

  const handleTravelDate = (e) => {
    if(!e.target.value){
      setTravelDateError('Please Book A Date');
    } else {
      setTravelDate(e.target.value);
      setTravelDateError('');
    }
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim() || !email.trim() || !travelDate.trim()) {
      setGlobalError('Fill in all the fields');
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setGlobalError('');
      handlePayment(40 + 1200 * travelers);
      modalRef.current.close();
    }
  };

  return (
    <div className="custom-modal-container">
      <dialog className="custom-modal" ref={modalRef}>
        <h3 className="heading-modal">Book Here</h3>
        <span>Required fields are marked by *</span>

        <form className="formbox" action="/Confirm" onSubmit={handleSubmit}>  
          <div className="details">
            {globalError && <p className='error-message'>{globalError}</p>}
            <label className="modal-name" htmlFor='user-name'>Name: *</label>
            <input onChange={handleName} id='user-name' className="inputname" name='username' value={name} type="text" />
            {nameError && <p className='error-message'>{nameError}</p>}

            <label htmlFor='user-email' className="modal-email">Email: *</label>
            <input onChange={handleEmail} className="inputemail" name='useremail' value={email} id='user-email' type="text" />
            {emailError && <p className='error-message'>{emailError}</p>}

            <label htmlFor='no-travelers' className="modal-travelers">Number of People</label>
            <input
              onChange={handleTravelers}
              className="inputtravelers"
              name='unotravelers'
              value={travelers}
              id='no-travelers'
              type="number"
              min="1"
            />

            <label htmlFor='user-traveldate' className="modal-travelDate"> Date: *</label>
            <input onChange={handleTravelDate} className="inputtravelDate" name='usertraveldate' value={travelDate} id='user-traveldate' type="date" />
            {travelDateError && <p className='error-message'>{travelDateError}</p>}

            <div className='reservation-card'>
                <div className="cost">
                    <span>${1200} x {travelers} {travelers === 1 ? "guest" : "guests"}</span>
                    <span>${1200 * travelers}</span>
                </div>
                
                <div className="cost">
                    <span>Tax</span>
                    <span>$ 40</span>
                </div>
                <hr className="solid" />
                <div className="total-cost">
                    <h3>Total</h3>
                    <h3>${40 + 1200 * travelers}</h3>
                </div>
            </div>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="confirm">
              Confirm
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handlePayment(0);
                modalRef.current.close();
              }}
              className="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>

      <button
        className="open-modal"
        onClick={() => {
            modalRef.current.showModal();
        }}
      >
        Book a Deal
      </button>
    </div>
  );
}

export default CustomModal;
