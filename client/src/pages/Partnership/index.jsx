import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../../api/getUsers";
import { Card } from "./Card";
import "./partnership.scss";

const Partnership = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getUsers();
    if (result.status === 200) {
      const data = result.data;
      setUsers(data);
    }
  };

  return (
    <div className="partnership">
      <h2>Partner with or Join us as Volunteer</h2>
      {localStorage.getItem("isLoggedIn") && (
        <Link to="/agreement" className="button-to-agreement">
          Send the E-Agreement
        </Link>
      )}

      <div className="partnership-content">
        <h2>Our Partners and Volunteers :</h2>
        <div className="cards">
          {users.map((user) => (
            <Card key={user._id} name={user.name} joined={user.joined} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Partnership };
