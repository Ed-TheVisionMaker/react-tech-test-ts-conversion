import React from 'react';

interface DrinkImageProps {
  name: string | undefined;
  imageUrl: string | undefined;
  location: string;
}

const DrinkImage: React.FC<DrinkImageProps> = ({
  name,
  imageUrl,
  location,
}) => {
  return (
    <img
      className={location === 'Home' ? 'home-drink-image' : 'drink-drink-image'}
      src={imageUrl}
      alt={name}
    />
  );
};

export default DrinkImage;
