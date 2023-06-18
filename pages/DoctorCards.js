import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import doctors from "../data";
import "public/styles/globals.css";

const DoctorCards = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {

    setDoctorData(doctors);
  }, []);

  return (
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
  );
};

export default DoctorCards;
