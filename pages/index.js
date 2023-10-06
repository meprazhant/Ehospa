import React, { useEffect } from 'react';
import Landing from '../components/Home/Landing';
import Timeline from '../components/Home/Timeline';
import Doctors from '../components/Home/Doctors';
import { useSession } from 'next-auth/react';
import Dashboard from '../components/LoggedIn/Dashboard';


const Home = () => {
  let session = useSession()
  const [auth, setAuth] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)


  useEffect(() => {
    if (session.status === 'authenticated') {
      setAuth(true)
      setLoading(false)
      setUser(session.data.user)
      console.log(session.data.user)
    } else if (session.status === 'unauthenticated') {
      setAuth(false)
      setLoading(false)
    }
  }, [session.status])
  return (
    <div className="">
      {(!loading) && <div>
        {(!auth) && <div className="flex flex-col gap-2">
          <Landing />
          <Timeline />
          <Doctors />
        </div>}
        {(auth) && <div className="flex flex-col gap-2">
          <Dashboard user={user} />
        </div>}
      </div>}
    </div>
  );
}

export default Home;
