import React from "react";

const HeroSection = () => {
  const Images = [
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  ];
  return (
   <>
  <div className="flex flex-col lg:flex-row justify-between py-10 px-4 gap-10 max-w-7xl mx-auto">
    
    {/* Image Grid Section */}
    <div className="grid grid-cols-2 gap-2 w-full lg:w-1/2">
      {Images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Image ${idx + 1}`}
          className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-115 rounded-2xl"
        />
      ))}
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center items-center text-start w-full lg:w-1/2">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:text-between">fotovoid Offers</h1>
      <p className="text-base mb-6 px-2 md:px-6">
        Explore a world of free AI-generated images. FotoVoid is a modern
        image service offering a vast library of stunning, high-resolution
        visuals — all created using advanced AI technology. Every image on
        FotoVoid is unique, royalty-free, and ready to use for your
        personal or commercial projects. No subscriptions. No licensing
        worries. Just pure, AI-crafted visuals at your fingertips. ✨
        <br /><br />
        <strong>What makes FotoVoid different:</strong><br />
        ✅ 100% AI-generated images<br />
        ✅ Completely free to use<br />
        ✅ High-quality and diverse styles<br />
        ✅ Easy browsing with smart categories<br />
        ✅ No attribution required
        <br /><br />
        Discover endless visual possibilities. FotoVoid — Where AI meets imagination.
      </p>
      <a
        href="#"
        className="bg-blue-700 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-xl transition-transform duration-300 hover:scale-110"
      >
        Get Started
      </a>
    </div>

  </div>
</>

  );
};

export default HeroSection;
