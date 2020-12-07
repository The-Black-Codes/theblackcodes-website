import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faFacebook, faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'

const FooterComponent = (props) => {
    return (
      <footer className="page-footer font-small cyan darken-3">

      {/* Footer Elements */}
      <div className="container">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col py-2">
            <div className="my-4 text-center">
              <h3 className="mb-4">About The Black Codes</h3>
              <p>The Black Codes represents a resource hub for the black tech community. We strive to empower and position our community to be leaders in the tech industry by providing the resources they need to succeed. The tech field is lacking a minority presence and we are changing that narrative through our platform.
              </p>
            </div>
            <div className="my-5 text-center">
              <h3 className="my-4">Follow Us</h3>
              {/* Facebook */}
              <a href="https://www.facebook.com/theblackcodes01/" className="fb-ic">
                <FontAwesomeIcon className='mx-3' size='2x' icon={faFacebook} />
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/_theblackcodes" className="tw-ic">
              <FontAwesomeIcon className='mx-3' size='2x' icon={faTwitter} />
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/company/the-black-codes/?viewAsMember=true" className="li-ic">
              <FontAwesomeIcon className='mx-3' size='2x' icon={faLinkedin} />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/theblack.codes/" className="ins-ic">
              <FontAwesomeIcon className='mx-3' size='2x' icon={faInstagram} />
              </a>
              {/* Github */}
              <a href="https://github.com/The-Black-Codes">
              <FontAwesomeIcon className='mx-3' size='2x' icon={faGithub} />
              </a>
              {/* Github */}
              <a href="https://youtube.com/channel/UCO48K92fIhj9XoAVv52jAqQ">
              <FontAwesomeIcon className='mx-3' size='2x' icon={faYoutube} />
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
      </div>
       {/* Footer Elements */}
    
      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">
        <a href="https://theblackcodes.org/"> The Black Codes</a> ||  © 2020 Copyright
      </div>
      {/* <!-- Copyright --> */}
    
    </footer>
    // <!-- Footer -->
    );
  };
  
  export default FooterComponent;