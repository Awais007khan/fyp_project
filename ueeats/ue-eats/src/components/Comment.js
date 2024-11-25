import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './backgroundw.jpeg';

function Signup() {
    const [credentials, setCredentials] = useState({ itemname: "", comment: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { itemname, comment } = credentials;

        setLoading(true);
        setError(''); // Reset error state on submit

        try {
            const response = await fetch(`http://localhost:5000/api/auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemname, comment })
            });

            const json = await response.json();
            console.log(json);

            if (json.Success) {
                localStorage.setItem('token', json.authtoken);
                navigate("/hero");
            } else {
                setError('Invalid data entered. Please try again.');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Optional, for a parallax effect
            }}
        >
            <div className="flex justify-center items-center min-h-screen">
                {/* Changed max-w-md to max-w-xl for a wider form */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg -mt-2"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Comment</h2>
                    {error && <div className="mb-4 text-red-500">{error}</div>}

                    <div className="mb-4">
                        <label htmlFor="itemname" className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={credentials.itemname}
                            onChange={onChange}
                            name='itemname'
                            id="itemname"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={credentials.comment}
                            onChange={onChange}
                            name='comment'
                            id="comment"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
