import React from 'react';
import Navbar from '../components/Navbar';
import "public/styles/globals.css";

const AboutPage = () => {
  return (
    <div>
        <Navbar />
      <h1 className='abouttext'>How it works?</h1>

      <div className="container1">
        <div className="left-box1">
          <p>User have to specify how they are feeling.</p>
        </div>
        <div className="left-box2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eleifend tellus, eu ultrices diam.</p>
        </div>
        <div className="left-box3">
        <img src="https://www.pngmart.com/files/21/Doctor-PNG-Image.png" alt="" />
        </div>
      </div>

      <div className="container2">
        <div className="right-box1">
        <img src="https://www.pngmart.com/files/21/Doctor-PNG-File.png" alt="" />
        </div>
        <div className="right-box2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula auctor elit, ac dapibus elit pharetra vitae. Nulla facilisi. Praesent dignissim tortor eu est consectetur, id cursus tortor eleifend. Donec non posuere sem.
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
