import { Link } from "react-router-dom";

import { Card } from "./Card";
import "./partnership.scss";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Partnership = () => {
  return (
    <div className="partnership">
      <h2>Partner or Join Us as Volunteer</h2>
      {localStorage.getItem("isLoggedIn") && (
        <Link to="/agreement" className="button-to-agreement">
          Send the E-Agreement
        </Link>
      )}

      <div className="partnership-content">
        <h2>Our Partners and Volunteers :</h2>
        <div className="cards">
          {data.map((d) => (
            <Card key={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Partnership };
