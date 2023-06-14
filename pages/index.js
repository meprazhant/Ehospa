import React from 'react';
import Navbar from '../components/Navbar';
import 'tailwindcss/tailwind.css';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <div className='left'>
        <img src="https://i.pinimg.com/originals/cf/d9/98/cfd9988c2826d5638ee5f88774e060cc.png" alt="" />
      </div>
      <div className='middle'>
        <h1 className='text1'>The Smart</h1>
        <p className='text2'>Hospital</p>
        <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='btn1'>BOOK A APPOINTMENT</button>
      </div>
      <div className='right'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Doctor_with_Nurse_Cartoon.svg/1200px-Doctor_with_Nurse_Cartoon.svg.png" alt="" />
      </div>
    </div>
    </div>
  );
}

export default Home;