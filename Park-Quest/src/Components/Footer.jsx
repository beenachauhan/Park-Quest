import React from 'react';
import '../assets/css/Footer.css'



function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <p>@Park-Quest.com</p>
      </div>
      <section className='social-media'>
          <div className='social-icons'>
            {/* "below CSS adapted from https://css.gg under the MIT License" */}
            <a href="#" className='link' to='/' target='_blank' aria-label='Facebook'>
              <i className='gg-facebook' />
            </a>
            <a href="#" className='link' to='/' target='_blank' aria-label='Instagram'>
              <i className='gg-instagram' />
            </a>
            <a href="#" className='link' to='/' target='_blank' aria-label='Twitter'>
              <i className='gg-twitter' />
            </a>  
           </div> 
      </section>
    </div>
  );
}

export default Footer;