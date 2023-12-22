import React, { useEffect, useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";

function ProspectsPage() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState();

//   useEffect(() => {
//     fetch("/user", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data: any) => {
//         // This is not the best way to handle this
//         if (data.message === "Unauthorized") {
//           navigate("/signup");
//         }
//         console.log(data);
//         // setUser(data)
//       });
//   }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
        Prospects Page
    </div>
  );
}

export default ProspectsPage;
