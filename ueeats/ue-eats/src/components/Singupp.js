// Signupp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signupp() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;

        if (password !== cpassword) {
            alert("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            const json = await response.json();
            console.log(json);

            if (json.Success) {
                localStorage.setItem('token', json.authtoken);
                navigate("/hero");
            } else {
                alert('Try to enter correct credentials');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container mt-2'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg -mt-2">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    value={credentials.name}
                    onChange={onChange}
                    name='name'
                    id="name"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                    type="email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    value={credentials.email}
                    onChange={onChange}
                    name='email'
                    id="email"
                    required
                />
                <p className="mt-1 text-xs text-gray-500">We'll never share your email with anyone else.</p>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    value={credentials.password}
                    onChange={onChange}
                    name='password'
                    id="password"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    value={credentials.cpassword}
                    onChange={onChange}
                    name='cpassword'
                    id="cpassword"
                    required
                />
            </div>
            <button type="submit" className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
        </div>
    );
}

export default Signupp;
