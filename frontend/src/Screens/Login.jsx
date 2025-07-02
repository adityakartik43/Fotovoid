import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const bannerImages = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
];

const Banner = ({ email, setEmail, password, setPassword, handleLogin }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Slider {...settings}>

          {/* Background Carousel */}
          {bannerImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Banner ${idx}`}
              className="w-full h-screen object-cover"
            />
          ))}
        </Slider>

        <div className="absolute inset-0 bg-black/50 flex items-center md:justify-end justify-center"> 
          <div className="min-h-screen flex justify-center items-center w-screen bg-black/50 backdrop-blur-sm">
            <div className="p-8 w-full max-w-md">
              <h2 className="text-3xl font-semibold text-center text-white mb-6">Login to {" "}<span className="inline-block font-bold text-blue-700 duration-300 hover:text-pink-600 transition-transform hover:scale-110 hover:gap-5">fotovoid</span></h2>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block mb-1 text-white text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-white text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-pink-600 duration-300 transition"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-sm text-white mt-6">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  const [email, setEmail] = useState("aditya@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async (e) => {
    e.preventDefault();
    // 🔐 Replace with real auth logic
    
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        email, password
      });

      const expiryTime = Date.now() + 1000 * 60;
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem("expiry", expiryTime);
      toast.success("Login successfull");
      window.location.href = '/dashboard';
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }

  };

  return (
    <>
    <Banner
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />

    </>
  );
};

export default Login;
