import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingGif from './giphy.webp'; // Replace with the actual path to your GIF

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Change 3000 to however many milliseconds you want the loading to last
        

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <img src={loadingGif} alt="Loading..." style={{ width: '150px', height: '150px' }} />
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1>FlipKart</h1>
                <button 
                    onClick={() => navigate("/products")} 
                    className="btn btn-primary"
                >
                    Go to Products page
                </button>
            </div>
        </div>
    );
}

export default Login;
