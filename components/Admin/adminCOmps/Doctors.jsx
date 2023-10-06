import React, { useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Doctorcard from './Doctorcard'
import Adddoctor from './Adddoctor'

function Doctors() {
    var [doctors, setDoctors] = useState([])

    function getAll() {
        fetch('/api/doctor/getall')
            .then(response => response.json())
            .then(data => {
                setDoctors(data.data)
            })
    }

    useEffect(() => {
        getAll()
    }
        , [])

    return (
        <div className="flex-1 px-2 py-3 sm:px-0">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-extralight text-white/50">Doctors</h3>
            </div>
            <div className="flex justify-between items-center pt-5">
                <button className="btn" onClick={() => {
                    document.getElementById('my_modal_4').showModal()
                }}>
                    <IoMdAddCircleOutline />
                    Add Doctors
                </button>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Add a Doctor</h3>
                    <Adddoctor />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {doctors.map((doctor) => {
                    return <Doctorcard key={doctor._id} doctor={doctor} />
                })}
            </div>
        </div>
    )
}

export default Doctors