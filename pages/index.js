import React from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push('/appointment');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src="https://i.pinimg.com/originals/cf/d9/98/cfd9988c2826d5638ee5f88774e060cc.png" alt="" />
        </div>
        <div className="middle">
          <h1 className="text1">The Smart</h1>
          <p className="text2">Hospital</p>
          <p className="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn1" onClick={handleBookAppointment}>BOOK AN APPOINTMENT</button>
        </div>
        <div className="right">
          <img src="https://i.pinimg.com/originals/cf/d9/98/cfd9988c2826d5638ee5f88774e060cc.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
