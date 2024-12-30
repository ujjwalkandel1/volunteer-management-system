import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "/assets/bgimg.jpg"; // Adjust the path to the image as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    phone: "",
    url: "",
    startDate: "",
    duration: "",
    action: "volunteer",
    location: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_fflfi4x";
    const templateID = "template_bgmfvuj";
    const publicKey = "_aIWDQVms0xGhDsme";

    const formDataToSend = {
      ...formData,
      eventImage: file ? file.name : "",
    };

    emailjs
      .send(serviceID, templateID, formDataToSend, publicKey)
      .then((response) => {
        toast.success("Your message has been sent successfully!");
      })
      .catch((error) => {
        toast.error("There was an error sending the message.");
      });
  };

  return (
    <div className="mx-8 lg:mx-24">
      {/* "Contact Us" section with background image */}
      <div
        className="p-12 text-white flex justify-center items-center h-96 relative rounded-md shadow-lg"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(52, 152, 219, 0.8), rgba(231, 76, 60, 0.6)) , url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Let’s Start a Conversation</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-8 lg:py-12 xl:py-16 px-6 lg:px-10 xl:px-16 rounded-md shadow-md mt-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-700">
              Get in Touch With Us!
            </h2>
            {/* Contact Information */}
            <div className="space-y-6 text-gray-600">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 10h1m8-8h.01M13 4h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9m0 4v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6m0-4v-.5a2.5 2.5 0 015 0V9m5 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m0-4h-2m-6 8h4" />
                  </svg>
                </div>
                <span className="ml-3 text-lg">9806810999</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12h6m-6 4h6m-6-8h6M8 7v10m-4 0h4a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h4z" />
                  </svg>
                </div>
                <span className="ml-3 text-lg">info@Sewavolunteering.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 10c0 7.732-9 13-9 13S3 17.732 3 10a9 9 0 1118 0z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-lg">Khairahani-Chitwan, Nepal</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-700">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Input fields */}
              <div className="mb-4">
                <label
                  htmlFor="orgName"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Organization Name*
                </label>
                <input
                  type="text"
                  id="orgName"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                  Organization Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
                  Organization Contact
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="url" className="block text-sm font-semibold text-gray-600">
                  Organization Website URL
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Start Date*
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Duration*
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  placeholder="e.g., 2 hours, 1 day"
                  />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="action"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Action*
                    </label>
                    <select
                      id="action"
                      name="action"
                      value={formData.action}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    >
                      <option value="volunteer">Volunteer</option>
                      <option value="donate">Donate</option>
                      <option value="attend">Attend</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Event Location*
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Event Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="file"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Upload Image (Optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          {/* Toast Notifications */}
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
        </div>
      );
    };
    
    export default ContactForm;
    
