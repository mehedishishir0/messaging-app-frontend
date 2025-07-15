import React from 'react'

const OtherUser = ({ user }) => {

    return (
        <div>
            <div className='flex gap-2 items-center hover:bg-gray-300 rounded-sm  cursor-pointer '>
                <div className='flex items-center gap-3'>
                    <div className='avatar avatar-online '>
                        <div className='w-10 h-10 rounded-full'>
                            <img className=' rounded-full' src={user?.profilePicture || "https://placehold.co/400"} alt="" />
                        </div>
                    </div>
                    <div >
                        <div className='flex gap-2 flex-1'>
                            <p>{user?.fullName}</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='divider my-0 py-0'></div>
        </div>
    )
}

export default OtherUser
