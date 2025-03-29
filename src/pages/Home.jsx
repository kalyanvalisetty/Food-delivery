import React from 'react'
import Banner from "../components/Banner";
import Body from '../components/Body';
import useOnlineStatus from '../utils/useOnlineStatus';


const Home = () => {

  let onlineStatus = useOnlineStatus()

  if(!onlineStatus){
    return <h1>Offline</h1>
  }

  return (
    <div>
        <Banner/>
        <Body/>
    </div>
  )
}

export default Home