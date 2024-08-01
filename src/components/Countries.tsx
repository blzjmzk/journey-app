import { useCities } from "../contexts/CitiesContext";

interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: Position;
  id: string;
}

interface Country {
  country: string;
  emoji: string;
}

interface Position {
  lat: number;
  lng: number;
}

const Countries = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <span className="loading loading-spinner loading-lg" />;
  if (!cities.length) return <span>Click a city to add to your journey!</span>;

  const countries: Country[] = cities.reduce((arr: Country[], city: City) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul>
      {countries.map((country, index) => (
        <li className="text-base-100" key={index}>
          <div className="place-items-center grid grid-cols-[15%_85%]">
            <div className="py-2">{country.emoji}</div>
            <div>{country.country}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
