
import { useState } from "react";
import "./Wardrobe.css";

function Wardrobe() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleWardrobe() {
    setIsOpen(previous => !previous);
  }

  return (
    <section className="wardrobe-section">
      <h2>My Closet ♡</h2>
      <p>Welcome to your digital wardrobe!</p>

      <div className="wardrobe-display">
        <img
          src={
            isOpen
              ? "/images/wardrobe-open.png"
              : "/images/wardrobe-closed.png"
          }
          alt={isOpen ? "Open wardrobe" : "Closed wardrobe"}
          className="wardrobe-image"
        />
      </div>

      <button
        className="wardrobe-button"
        onClick={toggleWardrobe}
      >
        {isOpen ? "Close Wardrobe" : "Open Wardrobe"}
      </button>

      {isOpen && (
        <p className="wardrobe-message">
          Your closet is open! Let's pick an outfit ♡
        </p>
      )}
    </section>
  );
}

export default Wardrobe;
