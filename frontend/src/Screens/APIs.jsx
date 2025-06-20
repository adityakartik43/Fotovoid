import React from "react";

const APIsCard = ({title, desc, url}) => (
    <>
    <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg shadow-gray-600 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-100 text-sm mb-3">
            {desc}
          </p>
          <code className="block bg-white p-3 rounded text-sm text-blue-600 overflow-x-auto">
            {url}
          </code>
        </div>
    </>
)

const APIs = () => {
  return (
    <div className="py-16 px-4 items-center md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">📡 fotovoid APIs</h2>
        <p className="text-lg text-white mb-10">
          Access our AI-generated image library with simple and fast API endpoints.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center justify-center">
        
        <APIsCard
          title="🔍 Search Images"
          desc="Find images by keyword with fast and relevant results."
          url="GET https://api.fotovoid.com/images?query=nature"
        />
        <APIsCard
          title="📁 Categories"
          desc="Browse all available image categories."
          url="GET https://api.fotovoid.com/categories"
        />
        <APIsCard
          title="🖼️ Get Image by ID"
          desc="Fetch full details and download links for a specific image."
          url="GET https://api.fotovoid.com/image/:id"
        />
        <APIsCard
          title="📊 Image Stats"
          desc="Get download count, likes, and usage data."
          url="GET https://api.fotovoid.com/image/:id/stats"
        />
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://docs.fotovoid.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-transform hover:scale-105 font-semibold shadow hover:shadow-lg shadow-gray-600"
        >
          View Full API Docs
        </a>
      </div>
    </div>
  );
};

export default APIs;
