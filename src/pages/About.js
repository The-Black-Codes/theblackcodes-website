import React from 'react';
import JumbotronComponent from '../components/Jumbotron';
// import BackgroundVideo from '../components/BackgroundVideo';

const About = () => {
    return (
      <div id="about-page">
        <JumbotronComponent pageTitle='About Us' lead='Learn all about The Black.Codes.' />
        {/* <BackgroundVideo /> */}
          <div class="container-fluid">
            <div class="about-section">
              <div class="row">
                <div class="col-md-6"><div class="about-img"></div></div>
                <div class="col-md-6 about-info">
                  <h2>Get to Know Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>
              </div>
            </div>
            <div class="row">
              <div class="mission-state">
                <h2>Mission Statment</h2>
                <div class="col-lg-12 statement"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default About;