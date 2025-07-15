import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice'
const useGateOtherUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOtherUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/user`)
                console.log(res)
                dispatch(setOtherUsers(res.data))
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUser()
    }, [])
}

export default useGateOtherUser
