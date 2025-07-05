import React, { useRef, useState } from "react";
import { UploadCloud, Users, Image, TerminalSquare } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [totalImages, setTotalImages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalApis, setTotalApis] = useState(0);
  // Removed unused image state
  const fileRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setImage(file.name); // Removed unused setImage call
      // alert("Image selected: " + file.name);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!fileRef.current.files[0]){
      alert("Please select image")
      return;
    }
    if(!selectedOption){
      alert("Please select caegory")
      return;
    }

    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    formData.append("category", selectedOption);

    const token = localStorage.getItem('token');

    if(!token){
      console.log("Token nhi hai bhai")
      return;
    }

    console.log(token)

    try {
      const res = await axios.post("http://localhost:3001/api/images/upload", formData,
         {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`
        }
      })
  
      console.log("Upload success: ", res.data);
      alert("Doneeeeeeee")
      totalNum();
  
      // setImage(null); // Removed unused image state reset
      setSelectedOption("");
      fileRef.current.value = "";
    } catch (error) {
      console.log(error);
      alert("Error aa gya hai bhai!!!!!!!")
    }

  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


   const formImage = (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleImageUpload}
        className="w-full px-4 py-3 border text-blue-900 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
      />

      <label className="block text-sm font-medium text-gray-700">Select an Option:</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="w-full px-4 py-3 border text-blue-900 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select --</option>
        <option value="Landscape_photo">Landscape photography</option>
        <option value="Portrait_photo">Portrait photo</option>
        <option value="Event_photo">Event photo</option>
        <option value="Wildlife_photo">Wildlife photo</option>
        <option value="Food_photo">Food photo</option>
        <option value="Misc">Misc photo</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Upload Image
      </button>
    </form>
  );

  const totalNum = async () => {
      const num = await axios.get(
        "http://localhost:3001/api/dashboard/totalimage"
      );
      setTotalImages(num.data.totalImage);
    };
    

  useEffect(() => {
    totalNum();
  }, []);

  useEffect(() => {
    const getTotalUsers = async () => {
      const totalUserss = await axios.get(
        "http://localhost:3001/api/admin/totaluser"
      );
      setTotalUsers(totalUserss.data.totalUser);
      // console.log(totalUserss.data.totalUser)
    };

    const getTotalApis = async () => {
      const numbersOfApis = await axios.get(
        "http://localhost:3001/api/admin/totalapis"
      );
      setTotalApis(numbersOfApis.data.totalApi);
    };

    getTotalUsers();
    getTotalApis();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
          <Image className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Total Images</p>
            <p className="text-2xl font-bold text-gray-800">{totalImages}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
          <Users className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-bold text-gray-800">{totalUsers}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
          <TerminalSquare className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">APIs Created</p>
            <p className="text-2xl font-bold text-gray-800">{totalApis}</p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <UploadCloud className="w-6 h-6 text-blue-600" /> Upload New Image
        </h2>

        {formImage}
      </div>
    </div>
  );
};

export default AdminDashboard;
