import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

const AddUser = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/create",user);
            toast.success(res.data.msg,{position:"top-right",autoClose: 1500});
            navigate("/");
        } catch (error) {
            toast.error(error.message,{position:"top-right"});
        }
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-1/3 bg-white drop-shadow-xl rounded-md p-12">
                <h1 className='text-blue-900 text-3xl font-medium flex justify-center underline'>Add User</h1>
                <div className='mt-10'>
                    <Link to={"/"} className='bg-purple-800 text-white font-500 hover:bg-purple-900 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.65)] py-3 px-4 rounded-md'>Show User</Link>
                </div>
                <form onSubmit={submitHandler} className='w-full mt-5 flex flex-col'>
                    <div className="flex flex-col w-full">
                        <label className='text-xl text-gray-500 mt-3'>Fname:</label>
                        <input value={user.fname} onChange={inputHandler} name='fname' className=' w-full border-1 outline-none py-1 px-3 rounded-md hover:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.45)]' type="text" placeholder='Enter first name: ' />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className='text-xl text-gray-500 mt-3'>Lname:</label>
                        <input value={user.lname} onChange={inputHandler} name='lname' className=' w-full border-1 outline-none py-1 px-3 rounded-md hover:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.45)]' type="text" placeholder='Enter last name: ' />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className='text-xl text-gray-500 mt-3'>Email:</label>
                        <input value={user.email} onChange={inputHandler} name='email' className=' w-full border-1 outline-none py-1 px-3 rounded-md hover:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.45)]' type="email" placeholder='Enter email id: ' />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className='text-xl text-gray-500 mt-3'>Password:</label>
                        <input value={user.password} onChange={inputHandler} name='password' className=' w-full border-1 outline-none py-1 px-3 rounded-md hover:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.45)]' type="password" placeholder='Enter password: ' />
                    </div>
                    <div className="flex flex-col w-full">
                        <button className='mt-10 border-none outline-none bg-green-700 hover:bg-green-600 px-3 py-2 rounded-md text-white cursor-pointer'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
