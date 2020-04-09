import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faTwitter, faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
// import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-solid-svg-icons'

const footerStyle = {
  background: '#999',
  height: '100px'
}

const FooterComponent = (props) => {
    return (
      <footer className="page-footer font-small cyan darken-3">

      {/* Footer Elements */}
      <div className="container">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-12 py-2">
            <div className="mt-4 text-center">
              <h3 className="mb-5">About The Black.Codes</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis nunc eget lorem dolor. Aliquet risus feugiat in ante metus dictum at tempor commodo. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eget est lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>  
          {/* Grid column */}
    
          {/* Grid column */}
          <div className="col-md-12 py-5">
            <div className="mb-5 text-center">
              <h3 className="mb-5">Follow Us</h3>
              {/* Facebook */}
              <a href="https://www.facebook.com/theblackcodes01/" className="fb-ic">
                <FontAwesomeIcon className='mx-3' size='6x' icon={faFacebook} />
              </a>
              {/* Twitter */}
              <a className="tw-ic">
              <FontAwesomeIcon className='mx-3' size='6x' icon={faTwitter} />
              </a>
              {/* Linkedin */}
              <a className="li-ic">
              <FontAwesomeIcon className='mx-3' size='6x' icon={faLinkedin} />
              </a>
              {/* Instagram */}
              <a className="ins-ic">
              <FontAwesomeIcon className='mx-3' size='6x' icon={faInstagram} />
              </a>
              {/* Github */}
              <a>
              <FontAwesomeIcon className='mx-3' size='6x' icon={faGithub} />
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
       {/* Footer Elements */}
    
      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> The Black.Codes.com</a>
      </div>
      {/* <!-- Copyright --> */}
    
    </footer>
    // <!-- Footer -->
    );
  };
  
  export default FooterComponent;