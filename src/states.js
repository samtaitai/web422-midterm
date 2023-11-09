"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NameList({ filteredNames }) {
  return (
    <ul className="list-group">
      {filteredNames.map((name, index) => (
        <li className="list-group-item text-center" key={index}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function Content() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([
    "Steve Jobs",
    "Bill Gates",
    "Elon Mush",
    "Warren Buffet",
    "Angelina Jolie",
    "Jeff Bezos",
    "MaryWilkes",
    "Hannah Stone",
    "Isabela Keller",
    "SteveWozniak",
  ]);
  const [filteredNames, setFilteredNames] = useState(names);
  const updateFilteredNames = (input) => {
    const filtered = names.filter((n) =>
      n.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredNames(filtered);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
    updateFilteredNames(e.target.value);
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center">Search Names</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Search by name..."
            value={name}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <NameList filteredNames={filteredNames} />
    </div>
  );
}
