import { City } from '../entities/city.entity';

export const generateCitiesListMessage = (cities: City[]) => {
  const cityNames = cities.map((city) => city.name);
  return `Города: ${cityNames.join(', ')}`;
};
