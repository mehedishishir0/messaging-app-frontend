import axios from 'axios'
import React, { useEffect } from 'react'

const useGetMessage = () => {

    useEffect(()=>{
       const fetchMessages = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/`)
        } catch (error) {
            
        }
       }
       fetchMessages()
    },[])

}

export default useGetMessage
