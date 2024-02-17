export interface PartialApiData {
  name: string;
  image_url: string;
  abv: string;
  tagline: string;
  description: string;
  food_pairing: string[]
}

export interface DrinkData {
  imageUrl: string;
  name: string;
  abv: string;
  tagline: string;
  description: string;
  foodPairing: FoodPairingWithId[];
}

export interface FoodPairingWithId {
  description: string;
  id: number;
}