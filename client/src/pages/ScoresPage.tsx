import React, { useEffect, useState } from "react";

function ScoresPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    console.log("hello")
    fetch("/user", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data: any) => {
        console.log(data)
        setUsers(data)
      })
  }, [])

  console.log(users)
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
