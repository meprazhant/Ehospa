import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'
function Adminhome() {
    var router = useRouter()
    var [userDetails, setUserDetails] = React.useState(null)
    useEffect(() => {
        fetch('/api/user/getLogged')
            .then(response => response.json())
            .then(data => {
                if (data.data.role == 'admin') {
                    setUserDetails(data.data)
                } else {
                    router.push('/')
                }
            })
    }, [])
    return (
        <div className='w-full flex justify-start'>
            {(!!userDetails) && <Sidebar user={userDetails} />}
        </div>
    )
}

export default Adminhome