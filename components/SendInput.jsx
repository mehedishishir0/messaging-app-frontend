import React from 'react'

const SendInput = () => {
  return (
    <form className='my-4'>
      <div className='w-full relative'>
        <input
          type='text'
          placeholder='type here..'
          className='border text-sm rounded-l-full block w-full bg-gray-700 text-white p-2'
        />
        <button
          type='submit'
          className='absolute flex items-center btn rounded-r-full top-0 -right-10'
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default SendInput
