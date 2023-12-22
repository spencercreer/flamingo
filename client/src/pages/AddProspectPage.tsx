import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function AddProspectPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // TODO: Store user id differently
    userId: "",
    companyName: "",
    contact: "",
  });

  useEffect(() => {
    fetch("/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: any) => {
        // This is not the best way to handle this
        if (data.message === "Unauthorized") {
          navigate("/signup");
        }
        console.log(data[0]._id);
        setFormData({ ...formData, userId: data[0]._id })
      });
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/prospect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Prospect added")
        navigate("/prospects");
      } else {
        console.error("Failed to add lead:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-600 mb-2">
            Company Name
          </label>
          <input
            type="companyName"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-600 mb-2">
            Contact (Optional)
          </label>
          <input
            type="contact"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Add Lead
        </button>
      </form>
    </div>
  );
}

export default AddProspectPage;
