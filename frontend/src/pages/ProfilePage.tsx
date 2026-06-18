import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 User Profile</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName} {user.lastName}</h3>
          <p>{user.email}</p>
          <p>Risk Score: {user.riskScore}</p>
        </div>
      ))}
    </div>
  );
}