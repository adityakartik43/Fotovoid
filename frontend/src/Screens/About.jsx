import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg shadow-gray-600 border-1 border-amber-50">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">About fotovoid</h1>

        <p className=" text-lg leading-relaxed mb-6">
          <strong>fotovoid</strong> is a free and modern image service that offers high-quality, AI-generated
          visuals for designers, developers, content creators, and storytellers. Every image is carefully created
          using advanced AI technology and is completely free to use — whether it's for personal or commercial
          projects.
        </p>

        <p className=" text-lg leading-relaxed mb-6">
          The platform is built with a vision to democratize access to stunning visuals without the hassle of
          licenses, credits, or paywalls. Simple, fast, and open — that's what fotovoid stands for.
        </p>

        <p className=" text-lg leading-relaxed mb-6">
          fotovoid is designed and developed by <strong>Aditya Kartik</strong>, a tech enthusiast passionate
          about web development, creative freedom, and building tools that empower creators. The project reflects
          a blend of clean design, performance, and purpose.
        </p>

        <p className=" text-lg leading-relaxed mb-6">
          Whether you're launching a startup, crafting a blog, or designing an app — fotovoid is here to help you
          tell your story visually.
        </p>

        <div className="text-center mt-8">
          <a
            href="mailto:adityakartik43@gmail.com"
            className="text-blue-400 hover:underline text-lg"
          >
            📧 Contact Aditya
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
