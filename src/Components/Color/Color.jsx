import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    if (showConfirmation) {
      onDelete(color.id);
      setShowConfirmation(false); // Hide
    } else {
      setShowConfirmation(true); //show
    }
  };

  const handleConfirmDelete = () => {
    onDelete(color.id); // Call id
    setShowConfirmation(false); // Hide  after delet
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false); // Hide conf mex
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h4>{color.role}</h4>

      <p>contrast: {color.contrastText}</p>
      <h3 className="color-card-headline">
        {color.hex}
        {showConfirmation && (
          <div className="confirmation-message">
            <p>Are you sure you want to delete this color?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        )}
      </h3>

      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
