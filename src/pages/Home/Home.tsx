import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DrinkImage from '../../components/DrinkImage';
import DrinkText from '../../components/DrinkText';
import Dropdown from '../../components/Dropdown';
import LoadingSpinner from '../../components/LoadingSpinner';
import { DrinksListData, PartialApiData } from './Home.interfaces';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinksList, setDrinksList] = useState<DrinksListData[]>([]);
  const [numberOfDrinks, setNumberOfDrinks] = useState(10);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const parsedNumber = parseInt(e.target.value);
    setNumberOfDrinks(parsedNumber);
  };

  const hasData = () => {
    return drinksList.length > 0;
  };

  const fetchDefaultData = async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers');
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLargeData = async () => {
    try {
      const { data } = await axios.get(
        'https://api.punkapi.com/v2/beers?per_page=30'
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRequiredDrinks = async (drinksNumber: number) => {
    if (hasData()) setIsLoading(true);
    let data = [];
    if (drinksNumber === 10 || drinksNumber === 20) {
      data = await fetchDefaultData();
    }
    if (drinksNumber === 30) {
      data = await fetchLargeData();
    }
    createDrinksList(data, drinksNumber);
    setIsLoading(false);
  };

  const trimDrinkData = (data: PartialApiData[], drinksNumber: number) => {
    let trimmedData: PartialApiData[] = [];
    if (drinksNumber === 10) {
      trimmedData = data.slice(0, 10);
    } else if (drinksNumber === 20) {
      trimmedData = data.slice(0, 20);
    } else if (drinksNumber === 30) {
      trimmedData = data;
    }
    return trimmedData;
  };

  const createDrinksList = (data: PartialApiData[], drinksNumber: number) => {
    const drinksRequired = trimDrinkData(data, drinksNumber);
    const drinksList: DrinksListData[] = drinksRequired.map((drink) => {
      return {
        id: drink.id,
        imageUrl: drink.image_url,
        name: drink.name,
        description: drink.description,
      };
    });
    setDrinksList(drinksList);
  };

  useEffect(() => {
    const sessionNumberOfDrinks = sessionStorage.getItem('numberOfDrinks');
    if (sessionNumberOfDrinks) {
      const parsedNumber = parseInt(sessionNumberOfDrinks);
      fetchRequiredDrinks(parsedNumber);
    } else {
      fetchRequiredDrinks(numberOfDrinks);
    }
  }, [numberOfDrinks]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className='home-wrapper'>
          <div className='home-container'>
            <h2 className='home-title'>BrewDog</h2>
            <h3 className='home-tagline'>Something for everyone</h3>
            <Dropdown
              handleChange={handleChange}
              numberOfDrinks={numberOfDrinks}
            />
            <ul className='home-drinks-container'>
              {drinksList.map((drink: DrinksListData) => (
                <Link className='link' key={drink.id} to={`drink/${drink.id}`}>
                  <li className='home-drink-list-item'>
                    <div className='home-drink-display-wrapper'>
                      <DrinkImage
                        name={drink.name}
                        imageUrl={drink.imageUrl}
                        location={'Home'}
                      />
                      <DrinkText drinkData={drink} location={'Home'} />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
