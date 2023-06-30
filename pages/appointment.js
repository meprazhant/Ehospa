import { useState } from 'react';
import "public/styles/globals.css";
import Navbar from '../components/Navbar';
const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Appointment booked:', { name, email, phone, date, time });

    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
  };
  return (
    <div>
    <Navbar/>
    <form onSubmit={handleSubmit} className="appointment-form">
      <label htmlFor="name" className="label">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        required
      />

      <label htmlFor="email" className="label">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        required
      />

      <label htmlFor="phone" className="label">Phone</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input"
        required
      />

      <label htmlFor="date" className="label">Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input"
        required
      />

      <label htmlFor="time" className="label">Time</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="input"
        required
      />

      <button type="submit" className="submit-btn">Book Appointment</button>
    </form>
    </div>
  );
};

export default AppointmentForm;
