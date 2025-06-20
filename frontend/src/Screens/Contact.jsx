import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-base-200/50 p-8 rounded-2xl shadow-lg shadow-gray-600 border-1 border-amber-50" >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form className="space-y-6 text-white">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full mt-1 p-3 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-pink-600 transition-transform hover:scale-102"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-6">
          You can also reach us at <a href="mailto:contact@fotovoid.com" className="text-blue-600 underline">contact@fotovoid.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
