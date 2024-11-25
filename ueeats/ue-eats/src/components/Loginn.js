import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Loginn() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit=async (e)=>{
              e.preventDefault();
              const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
                  method: 'Post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({email:credentials.email,password:credentials.password})
                })
                const json = await response.json();
                console.log(json)
                if(json.Success){
                  localStorage.setItem('token',json.authtoken)
                  console.log("success")
                  navigate("/orderr")
                }
                else{
                  alert('try to enter correct credentials')
                }
          }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-gray-800 text-white p-4">
                <h1 className="text-lg">My Navbar</h1>
            </nav>
            <div className="flex-grow flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="email" value={credentials.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Loginn;

