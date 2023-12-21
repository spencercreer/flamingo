import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ScoresPage() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/user", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data: any) => {
        // This is not the best way to handle this
        if (data.message === "Unauthorized") {
          navigate("/signup")
        }
        setUsers(data)
      })
  }, [])

  return (
    <div>
      <h1>ScoresPage</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.email}</li>
          // Replace "id" and "username" with the actual properties of your user object
        ))}
      </ul>
    </div>
  );
}

export default ScoresPage;
