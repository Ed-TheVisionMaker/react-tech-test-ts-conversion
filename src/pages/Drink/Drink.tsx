import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DrinkImage from '../../components/DrinkImage';
import DrinkText from '../../components/DrinkText';
import LoadingSpinner from '../../components/LoadingSpinner';
import NavButton from '../../components/NavButton';
import {
  SingleDrinkData,
  FoodPairingWithId,
  PartialApiData,
} from './Drink.interfaces';

function Drink() {
  const [isLoading, setIsLoading] = useState(true);
  const [drinkData, setDrinkData] = useState<SingleDrinkData | null>(null);
  const params = useParams();
  const id = params.drinkId;

  const fetchDrinkData = async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      const drinkData = extractRequiredData(data);
      setDrinkData(drinkData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const extractRequiredData = (data: PartialApiData[]) => {
    const {
      name,
      image_url: imageUrl,
      abv,
      tagline,
      description,
      food_pairing: foodPairing,
    } = data[0];

    const foodPairingWithId: FoodPairingWithId[] = foodPairing.map(
      (food, i) => {
        return { description: food, id: i + 1 };
      }
    );

    return {
      name,
      imageUrl,
      abv,
      tagline,
      description,
      foodPairing: foodPairingWithId,
    };
  };

  useEffect(() => {
    fetchDrinkData(id as string);
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className='drink-wrapper'>
          <div className='drink-container'>
            <DrinkImage
              name={drinkData?.name}
              imageUrl={drinkData?.imageUrl}
              location={'Drink'}
            />
            <DrinkText drinkData={drinkData} location={'Drink'} />
            <NavButton />
          </div>
        </div>
      )}
    </>
  );
}

export default Drink;
