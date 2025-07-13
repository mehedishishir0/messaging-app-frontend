import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../src/redux/userSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUset] = useState({
    username: '',
    password: '',

  })
  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, user, {
        headers: {
          "Content-Type": "application/json"
        },
        // withCredentials: true
      })
      if (res.data.status) {
        toast.success(res.data.message)
        navigate("/")

        dispatch(setAuthUser(res.data.data))
      }

    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error.response.data.message)
    }
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 '>
        <h1 className='text-3xl font-bold text-center text-gray-300'>Sign up</h1>
        <form action="" onSubmit={handelSubmit}>
          <div className='flex flex-col'>
            <label className='label p-2'>
              <span className='text-base '>User Name</span>
            </label>
            <input onChange={(e) => setUset({ ...user, username: e.target.value })} value={user.userName} className='w-full input input-border' type="text" name="" id="" placeholder='user name' />
          </div>
          <div className='flex flex-col'>
            <label className='label p-2'>
              <span className='text-base '>Password</span>
            </label>
            <input onChange={(e) => setUset({ ...user, password: e.target.value })} value={user.password} className='w-full input input-border' type="password" name="" id="" placeholder='Password' />
          </div>

          <div className='text-center flex items-center gap-3'>
            <p>
              dont have an account?
            </p>
            <Link to="/register" >
              Sgin-up
            </Link>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sgin up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login