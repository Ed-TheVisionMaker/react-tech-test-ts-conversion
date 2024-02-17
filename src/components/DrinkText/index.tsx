import React from 'react';
import { DrinksListData } from '../../pages/Home/Home';
import { SingleDrinkData, FoodPairingWithId } from '../../pages/Drink/Drink.interfaces';

interface DrinkTextProps {
  drinkData: DrinksListData | SingleDrinkData | null;
  location: string;
}

const DrinkText: React.FC<DrinkTextProps> = ({ drinkData, location }) => {
  const textHomePage = () => {
    if (drinkData === null) return null;
    const { name, description } = drinkData;
    return (
      <div className='home-text-wrapper'>
        <h2 className='home-drink-name'>{name}</h2>
        <p className='home-drink-description'>{description}</p>
      </div>
    );
  };

  const foodPairingList = () => {
    let foodPairing: FoodPairingWithId[] | undefined;
    if (drinkData && 'foodPairing' in drinkData) {
      foodPairing = drinkData?.foodPairing;
      return (
        <div className='drink-food-pairing-list'>
          <h3>Food Pairing</h3>
          <ul>
            {foodPairing?.map((food) => (
              <li className='drink-food-pairing-item' key={food.id}>
                {food.description}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };

  const textDrinkPage = () => {
    if (drinkData === null)   return null;
    const { name, tagline, abv, description } = drinkData as SingleDrinkData;
    const taglinePeriodRemoved = tagline?.replace('.', '');
    return (
      <div className='drink-text-wrapper'>
        <h2 className='drink-drink-name'>{name}</h2>
        <p className='drink-tagline'>{taglinePeriodRemoved}</p>
        <p className='drink-abv'>{`${abv}%`}</p>
        <p className='drink-description'>{description}</p>
        {foodPairingList()}
      </div>
    );
  };

  return (
    <>
      {location === 'Home' && textHomePage()}
      {location === 'Drink' && textDrinkPage()}
    </>
  );
};

export default DrinkText;
