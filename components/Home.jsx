import React from 'react'
import Sidebar from './Sidebar'
import MessageContaienr from './MessageContaienr'

const Home = () => {
  return (
    <div className='flex rounded-lg sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-400 bg-clip-padding backdrop:filter'>
      <Sidebar/>
      <MessageContaienr/>
    </div>
  )
}

export default Home