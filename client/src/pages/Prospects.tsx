import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Page from "../components/Page";

function Prospects() {
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
    },
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
    <Page>
      <div className="min-h-screen flex items-center justify-center">
        <h1>Prospects</h1>
        <div className="flex flex-col">
          {prospects.map((prospect: any) => (
            <div>{prospect.companyName}</div>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Prospects;
