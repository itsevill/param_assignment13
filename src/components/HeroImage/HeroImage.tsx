// HeroImage/HeroImage.tsx
import React from 'react';


// Directly exporting the interface to be used in Storybook or other components
export interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="hero-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {ctaText && <button onClick={onCtaClick}>{ctaText}</button>}
      </div>
    </div>
  );
};

export default HeroImage;
