import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function UserForm({ onSubmit }) {
  const [inputName, setInputName] = useState("");
  const { setName } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);
    onSubmit(inputName);
    setSubmitted(true);
    navigate("/quiz"); // Navigate to the quiz page programmatically
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <div className="mt-2">
          <button type="submit">Start Quiz</button>
        </div>
      </form>
    </div>
  );
}
