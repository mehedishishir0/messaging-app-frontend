import React from 'react'
import OtherUser from './OtherUser'
import useGateOtherUser from '../src/hooks/useGateOtherUser'
import { useSelector } from 'react-redux'

const OtherUsers = () => {
    useGateOtherUser()
    const { otherUser } = useSelector(store => store.user)

    if (!otherUser) {
        return (
            <div>
                <h1>not found</h1>
            </div>
        )
    }
    return (
        <div className='overflow-auto'>
            {otherUser?.data?.map((user) => (
                <OtherUser key={user._id} user={user} />
            ))
            }
        </div>
    )
}

export default OtherUsers
