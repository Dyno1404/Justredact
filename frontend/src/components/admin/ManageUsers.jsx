import React, { useEffect, useState } from "react";
import api from "../../api"; 
import "./admin.css";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/admin/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        setUsers([
          { id: 1, name: "Hridaya", email: "hridya@example.com", blocked: false },
          { id: 2, name: "Anita", email: "anita@example.com", blocked: true },
          { id: 3, name: "Ravi", email: "ravi@example.com", blocked: false },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleBlock = (user) => {
    const newUsers = users.map((u) =>
      u.id === user.id ? { ...u, blocked: !u.blocked } : u
    );
    setUsers(newUsers);

    api.post(`/api/admin/users/${user.id}/block`, { block: !user.blocked });
  };

  const deleteUser = (user) => {
    if (!window.confirm(`Delete ${user.name}?`)) return;
    setUsers(users.filter((u) => u.id !== user.id));

    api.delete(`/api/admin/users/${user.id}`);
  };

  return (
    <div className="admin-page">
      <video autoPlay loop muted playsInline className="admin-bg">
        <source src="/videos/vid1.mp4" type="video/mp4" />
      </video>

      <div className="admin-header">
        <h1>👥 Manage Users</h1>
        <a href="/admin" className="home-btn">⬅ Back to Dashboard</a>
      </div>

      {loading ? <p>Loading...</p> : null}

      <div className="users-list">
        {users.map((u) => (
          <div key={u.id} className="user-row">
            <div className="user-info">
              <strong>{u.name}</strong>
              <small>{u.email}</small>
            </div>
            <div className="user-actions">
              <button
                className={`btn ${u.blocked ? "btn-danger" : "btn-ok"}`}
                onClick={() => toggleBlock(u)}
              >
                {u.blocked ? "Unblock" : "Block"}
              </button>
              <button className="btn btn-delete" onClick={() => deleteUser(u)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



