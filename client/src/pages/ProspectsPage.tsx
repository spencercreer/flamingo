import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";

function ProspectsPage() {
  const navigate = useNavigate();
  const [prospects, setProspects] = useState([
    {
      companyName: "Kelly Spicers",
      suggestedUrl: "",
    },
    {
      companyName: "Apple Inc.",
      suggestedUrl: "",
    },
    {
      companyName: "Walmart",
      suggestedUrl: "",
    }
  ]);

  // TODO
  // const { userId } = useAppContext();

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(`/user/${userId}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const userData = await response.json();

  //       if (response.ok) {
  //         setUser(userData);
  //       } else {
  //         console.error("Failed to fetch user:", userData.error);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };

  //   fetchUser();
  // }, [userId]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-bold">Prospects</h1>
          {prospects.map((prospect: any) => (
            <div>{prospect.companyName}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProspectsPage;
