import React, { useRef, useState } from "react";
import { UploadCloud, Users, Image, TerminalSquare } from "lucide-react";

const AdminDashboard = () => {
  const [totalImages, setTotalImages] = useState(200);
  const [totalUsers, setTotalUsers] = useState(15);
  const [totalApis, setTotalApis] = useState(4);
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file.name);
      // alert("Image selected: " + file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (image) {
      console.log("Uploading:", image);
      alert("Image uploaded successfully!");
      setImage(null)
      fileRef.current.value = "";
    } else {
      alert("Please select an image.");
    }
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Upload Image
          </button>
        </form>
  )


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Admin Dashboard</h1>

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

        { formImage }
      </div>
    </div>
  );
};

export default AdminDashboard;
