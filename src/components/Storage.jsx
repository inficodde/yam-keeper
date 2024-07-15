import React, { useState } from 'react';
import './styles/Storage.css';

const Storage = () => {
  const [selectedSlots, setSelectedSlots] = useState(new Array(36).fill(false));

  const handleSlotClick = (index) => {
    const newSelectedSlots = [...selectedSlots];
    newSelectedSlots[index] = !newSelectedSlots[index];
    setSelectedSlots(newSelectedSlots);
  };

  const allSelected = selectedSlots.every(slot => slot);

  return (
    <div className="storage">
      <h2>Your Storage</h2>
      <div className="storage-grid">
        {selectedSlots.map((isSelected, index) => (
          <button
            key={index}
            className={`storage-item ${isSelected ? (allSelected ? 'full' : 'selected') : ''}`}
            onClick={() => handleSlotClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Storage;
