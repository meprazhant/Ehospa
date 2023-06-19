import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import doctors from "../data";
import "public/styles/globals.css";
import Navbar from "../components/Navbar";

const DoctorCards = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    setDoctorData(doctors);
  }, []);

  return (
    <div>
      <Navbar />
      <h3 className="text4">Doctors and Staffs</h3>
      <div className="containers">
        <div className="column">
          {doctorData.map((doctor, index) => (
            <Card
              key={index}
              name={doctor.name}
              image={doctor.image}
              post={doctor.post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCards;

