// Card/Card.tsx
import React from 'react';

// Exporting the interface to be used for props validation
export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
  children?: React.ReactNode; // For additional content like buttons
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, children }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-description">{description}</p>}
        <div className="card-actions">{children}</div>
      </div>
    </div>
  );
};

export default Card;
