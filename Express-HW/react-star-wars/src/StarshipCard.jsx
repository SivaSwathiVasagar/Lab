import React, { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function StarshipCard() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarshipsData() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchStarshipsData();
  }, []);

  return (
    // without any stylling
    // <div>
    //   <ul className =" ">
    //     {starships.map((starship, index) => (
    //       <li key={index}>{starship.name}</li>
    //     ))}
    //   </ul>
    // </div>

    // using bootstarap for card stylling
    <div className="container">
      <div className="row">
        {starships.map((starship, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">{starship.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarshipCard;
