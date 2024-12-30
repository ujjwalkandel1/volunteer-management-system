import React from "react";
import img1 from "/assets/Ellipse 11.png";
import ourmission from "/assets/ourmission.jpg";
import img2 from "/assets/Ellipse 6.png";
import img3 from "/assets/Ellipse 9.png";
import img4 from "/assets/Ellipse 5.png";
import our from "/assets/our.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#E0F7FA] via-white to-[#F1F8E9] py-16 px-8 lg:px-24">
      {/* Main Title */}
      <h2 className="text-5xl font-extrabold text-center text-[#00796B] mb-16">
        About Us
      </h2>

      {/* Core Values Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-center text-[#00796B] mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ 
            { img: img1, title: "Humanity", desc: "Fostering empathy, compassion, and respect." },
            { img: img2, title: "Encouraging Minds", desc: "Empowering youth to make a difference." },
            { img: img3, title: "Environmental Care", desc: "Promoting sustainability and environmental care." },
            { img: img4, title: "Fostering Growth", desc: "Providing resources for growth through volunteerism." }
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={value.img}
                alt={value.title}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#00796B]"
              />
              <h4 className="text-xl font-semibold text-[#00796B] text-center mb-2">
                {value.title}
              </h4>
              <p className="text-center text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center mb-16 space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg">
            To create a world where everyone has the opportunity to contribute
            to the well-being of their community through meaningful volunteer
            work.
          </p>
        </div>
        <img
          src={ourmission}
          alt="Our Mission"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center mb-16 space-y-6 lg:space-y-0">
        <img
          src={our}
          alt="Our Vision"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-lg">
            A future where every individual feels empowered to make a positive
            impact through volunteerism and acts of kindness.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-center text-[#00796B] mb-6">
          What Volunteers Say
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-8">
          {[ 
            { quote: "Volunteering here has changed my life. It's rewarding to know I can make a real difference!", name: "John Doe" },
            { quote: "A wonderful place filled with passion and kindness. I'm so grateful to be part of this team.", name: "Jane Smith" }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
            >
              <p className="italic text-gray-800 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-[#004D40]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r bg-gradient-to-r from-green-500 to-blue-500 py-12 px-6 rounded-lg shadow-lg text-white text-center">
        <h3 className="text-4xl font-semibold mb-6">
          Join Us in Making a Difference
        </h3>
        <p className="text-lg mb-8">
          Be part of something bigger. Become a volunteer today and help us
          create a better tomorrow.
        </p>
        <a
          href="/event"
          className="bg-[#C2F5F4] text-[#004D40] px-8 py-4 rounded-full text-xl hover:bg-[#A7D8D2] transition duration-300"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
