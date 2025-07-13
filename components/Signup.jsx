import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    password: "",
    gender: "",
    confirmPassword: "",
  })
  const handelCheckBox = (gender) => {
    setUser({ ...user, gender })

  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.status) {
        toast.success(res.data.message)
        navigate("/login")
      }

    } catch (error) {
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
              <span className='text-base '>Full Name</span>
            </label>
            <input onChange={(e) => setUser({ ...user, fullName: e.target.value })} value={user.fullName} className='w-full input input-border' type="text" name="" id="" placeholder='full name' />
          </div>
          <div className='flex flex-col'>
            <label className='label p-2'>
              <span className='text-base '>User Name</span>
            </label>
            <input onChange={(e) => setUser({ ...user, username: e.target.value })} className='w-full input input-border' type="text" name="" id="" placeholder='user name' />
          </div>

          <div className='flex flex-col'>
            <label className='label p-2'>
              <span className='text-base '>Password</span>
            </label>
            <input onChange={(e) => setUser({ ...user, password: e.target.value })} className=' w-full input input-border' type="password" name="" id="" placeholder='Password' />
          </div>
          <div className='flex flex-col'>
            <label className='label p-2'>
              <span className='text-base '>Confirm Password</span>
            </label>
            <input onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} className='w-full input input-border' type="password" name="" id="" placeholder='PasswConfirm Password' />
          </div>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <p>Male</p>
              <input checked={user.gender == "male"} onChange={() => handelCheckBox('male')} type="checkbox" defaultChecked className='checkbox mx-2' />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input checked={user.gender == "female"} onChange={() => handelCheckBox('female')} type="checkbox" defaultChecked className='checkbox mx-2' />
            </div>
          </div>
          <div className='text-center flex items-center gap-3'>
            <p>
              Already have and account?
            </p>
            <Link to="/login" >
              Login
            </Link>
          </div>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Sgin up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup