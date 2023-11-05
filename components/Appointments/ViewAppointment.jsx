
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const ViewAppointment = ({ data }) => {
    console.log(data)
    const [appointDate, appointTime] = useState(data.appointmentDate)

    useEffect(() => {
        dayjs.extend(relativeTime)
        appointTime(dayjs(data.appointmentDate).fromNow())
    },[])
    return (
        <div className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
            <p>Category: {data.category}</p>
            <p>Dedicated Doctor: {data.dedicatedDoctor}</p>
            <p>Problem: {data.problem}</p>
            <p>Queue Number: {data.queueNumber}</p>
            <p>Appointment {appointDate}.</p>
            {/* doctor quere */}
            <div className="mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Cancel Appointment
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancel Appointment
                </button>
                </div>
        </div>
    );
};

export default ViewAppointment;

