import React, { useEffect, useState } from 'react'

function Appointment() {
    var [appointments, setAppointments] = useState([])
    function getAppointments() {
        fetch('/api/appointment/getallappoin')
            .then(response => response.json())
            .then(data => {
                setAppointments(data.data)
            })
    }

    useEffect(() => {
        getAppointments()
    }
        , [])

    return (
        <div className='flex-1 px-2 pt-8 py-3 sm:px-0'>
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-extralight text-white/50">Appointments</h3>
            </div>

            <div className="relative pt-10 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                For
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Queue
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => {
                            return (
                                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-800" key={appointment._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400">
                                        {appointment.appointmentDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {appointment.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {appointment.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {appointment.dedicatedDoctor}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {appointment.queueNumber}
                                    </td>
                                </tr>
                            )
                        }
                        )}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Appointment