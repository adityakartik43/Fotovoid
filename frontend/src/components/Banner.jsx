import Slider from "react-slick";


const bannerImages = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
];

const Banner = () => {
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
    <div className="relative w-full h-screen overflow-hidden shadow-lg shadow-gray-600">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center px-4 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to fotovoid</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover free, stunning, AI-generated images — no licenses, no fees, just creativity.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-700 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-transform duration-300 hover:scale-110"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
