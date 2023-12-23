import React, { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Page from "../components/Page";
import Button from "../components/Button";

function Prospects() {
  const navigate = useNavigate();
  const { userId } = useAppContext();
  const [prospects, setProspects] = useState([
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userData = await response.json();

        if (response.ok) {
          setProspects(userData.prospects);
        } else {
          console.error("Failed to fetch user:", userData.error);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <Page>
      <>
        <h1>Prospects</h1>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            {prospects.map((prospect: any, i) => (
              <div key={i} className="flex flex-row space-x-2">
                <div className="w-48">{prospect.companyName}</div>
                <div className="w-48">{prospect.suggestedUrl ? prospect.suggestedUrl : "www.temporyURL.com"}</div>
                <div className="w-32">
                  <Button>Enroll</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </Page>
  );
}

export default Prospects;
