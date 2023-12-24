import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Page from "../components/Page";
import Button from "../components/Button";
import Input from "../components/Input";

function AddProspect() {
  const { userId } = useAppContext();
  const navigate = useNavigate();
  console.log(userId);

  const [formData, setFormData] = useState({
    // TODO: Store user id differently
    userId: "",
    companyName: "",
    contact: "",
  });

  // useEffect(() => {
  //   if (!userId) {
  //     navigate("/login");
  //   }
  // }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await fetch("/prospect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userId }),
      });

      if (response.ok) {
        console.log("Prospect added");
        navigate("/prospects");
      } else {
        console.error("Failed to add lead:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <Page>
      <div className="flex mt-48 justify-center">
        <form
          className="bg-white p-8 shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <Input
            className="mb-4"
            label="Company Name"
            type="companyName"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <Input
            className="mb-4"
            label="Contact (Optional)"
            type="companyName"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <Button type="submit">Add Lead</Button>
        </form>
      </div>
    </Page>
  );
}

export default AddProspect;
