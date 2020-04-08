import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
// import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-solid-svg-icons'

const footerStyle = {
  background: '#999',
  height: '100px'
}

const FooterComponent = (props) => {
    return (
      <footer className="container-fluid" style={footerStyle}>
        <div className="row">
          <div className="col">
            <p>Test text</p>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="col">
            <p>Test text</p>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="col">
            <p>Test text</p>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;