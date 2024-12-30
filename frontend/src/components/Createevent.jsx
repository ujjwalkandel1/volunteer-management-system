import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    deadlineDate: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifySuccess = () => toast.success("Event created successfully");
  // const notifyError = () => toast.error("Failed to create Event");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("deadlineDate", formData.deadlineDate);

    if (file) {
      formDataToSend.append("image", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/event",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${your_token_here}`,
          },
        }
      );

      console.log("Event created successfully", response);
      notifySuccess();

      //Handle success (e.g., redirect to another page or show a success message)
    } catch (error) {
      toast.error(error.response.data.message);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="w-full flex justify-center pt-4 pb-4">
      <form
        className=" rounded-3xl p-5 bg-white shadow-2xl w-[50%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-semibold p-3  rounded-xl mb-6 text-gray-500">
          Create Events
        </h1>
        {/* Existing Fields */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-base font-semibold text-gray-600 mb-2"
          >
            Event Name<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="  mt-2 p-2 border border-gray-300 rounded-xl outline-none w-1/3 "
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block  text-base font-semibold text-gray-600 mb-2"
          >
            Event Location <span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="  mt-2 p-2 border border-gray-300 rounded-xl outline-none w-1/3"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block  text-base font-semibold text-gray-600 mb-2"
          >
            Start Date <span className="text-red-600"> *</span>
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className=" mt-2 p-2 border border-gray-300 rounded-xl w-1/3"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block  text-base font-semibold text-gray-600 mb-2"
          >
            Deadline date <span className="text-red-600"> *</span>
          </label>
          <input
            type="date"
            id="duration"
            name="deadlineDate"
            value={formData.deadlineDate}
            onChange={handleChange}
            className=" mt-2 p-2 border border-gray-300 rounded-xl w-1/3"
            placeholder="e.g., 2 hours, 1 day"
            required
          />
        </div>

        {/* New Fields for Action Data and Event Image */}

        <div className="mb-4">
          <label
            htmlFor="eventImage"
            className="block  text-base font-semibold text-gray-600 mb-2"
          >
            Event Image <span className="text-red-600"> *</span>
          </label>

          <input
            type="file"
            id="image"
            name="image" // Ensure this name is consistent
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <label
            htmlFor="image"
            className="mt-2 p-2 border border-gray-300 rounded-xl inline-block px-4 py-2 bg-blue-500 text-white font-semibold  cursor-pointer"
          >
            {" "}
            Upload Image
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description
          "
            className="block text-base text-gray-500 h-32px font-semibold "
          >
            Description <span className="text-red-600"> *</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="  mt-2 p-2 border border-gray-300 rounded-xl w-3/4 outline-none"
            rows="4"
            required
          ></textarea>
        </div>
        <span className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 m-6 py-2 font-semibold rounded-xl hover:bg-blue-600 w-[60%]"
          >
            Submit
          </button>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateEvent;
