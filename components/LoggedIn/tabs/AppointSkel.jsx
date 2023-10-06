import React from 'react'

function AppointSkel() {
    return (
        <div className="relative group bg-gray-900 py-5 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <div className="w-20 h-20 rounded-full bg-gray-100" src="" alt="cuisine" ></div>
            <h4 className="text-white text-2xl font-bold capitalize text-center w-20"></h4>
            <p className="bg-white/50 h-5 w-52 rounded-full" ></p>
            <p className="bg-white/50 h-20 w-52 rounded-xl" ></p>
            <p className="absolute top-2 text-white/20 inline-flex items-center text-xs"><span className='h-5 w-52 rounded-full bg-slate-300'></span> <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
    )
}

export default AppointSkel