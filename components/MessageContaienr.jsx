import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] h-full flex flex-col px-10 py-3'>
      <div className='flex gap-2 items-center bg-zinc-700 rounded-sm cursor-pointer mb-2'>
        <div className='flex items-center gap-3'>
          <div className='avatar avatar-online'>
            <div className='w-10 h-10 rounded-full'>
              <img
                className='rounded-full'
                src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'
                alt=''
              />
            </div>
          </div>
          <div>
            <div className='flex gap-2 flex-1'>
              <p>shishir</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className='flex flex-col flex-1 '>
        <Messages />
        <SendInput />
      </div>
    </div>
  )
}

export default MessageContainer
