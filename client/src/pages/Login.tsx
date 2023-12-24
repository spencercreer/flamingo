import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Page from "../components/Page";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { user } = await response.json();
        login(user._id);
        navigate("/");
      } else {
        console.error("Failed to sign up:", response.statusText);
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
          <h1 className="mb-4">Log In</h1>
          <Input
            className="mb-4"
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            className="mb-4"
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Log In</Button>
          <div className="text-gray-600 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </Page>
  );
}
