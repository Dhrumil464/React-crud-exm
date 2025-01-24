import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'


const ShowUser = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/getAll");
                setUser(res.data.Users);
            } catch (error) {
                toast.error(error.message, { position: "top-right" });
            }
        }
        fetchData();
    }, []);

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8000/api/deleteUser/${id}`);
            setUser((prevUser) => prevUser.filter((user) => user._id !== id))
            toast.success(res.data.msg, { position: "top-right", autoClose: 1500 });
            navigate("/");
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-[60%] bg-white drop-shadow-xl rounded-md p-12">
                <h1 className='text-blue-900 text-3xl font-medium flex justify-center underline'>Show Users</h1>
                <div className='mt-8'>
                    <Link to={"/addUser"} className='bg-purple-800 hover:bg-purple-900 text-white font-500 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.65)] py-3 px-4 rounded-md'>Add User</Link>
                </div>
                <table border={1} cellPadding={10} cellSpacing={0} className='mt-8 w-full border border-gray-400 border-collapse'>
                    <thead>
                        <tr>
                            <th className='border border-gray-400 bg-purple-800 text-white p-2'>S.No.</th>
                            <th className='border border-gray-400 bg-purple-800 text-white p-2'>User Name</th>
                            <th className='border border-gray-400 bg-purple-800 text-white p-2'>User Email</th>
                            <th className='border border-gray-400 bg-purple-800 text-white p-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((ele, idx) => {
                            return <tr key={ele._id}>
                                <td className='border border-gray-400 p-1 text-center'>{idx + 1}</td>
                                <td className='border border-gray-400 p-1 text-center'>{ele.fname} {ele.lname}</td>
                                <td className='border border-gray-400 p-1 text-center'>{ele.email}</td>
                                <td className='border border-gray-400 p-1 text-center'>
                                    <Link to={`/updateUser/${ele._id}`} className='bg-green-700 hover:bg-green-600 px-2.5 py-2.5 mx-2 rounded-sm text-white'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={() => { deleteUser(ele._id) }} className='border-none outline-none bg-red-500 hover:bg-red-600 px-3 py-2 rounded-sm text-white cursor-pointer'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowUser
