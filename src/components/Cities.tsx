import { IoCloseCircle } from "react-icons/io5"; //Licence: MIT

interface Props {
  cities: City[];
  isLoading: boolean;
}

interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: Position;
  id: string;
}

interface Position {
  lat: number;
  lng: number;
}

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const Cities = ({ cities, isLoading }: Props) => {
  if (isLoading) return <span className="loading loading-spinner loading-lg" />;
  if (!cities.length) return <span>Click a city to add to your journey!</span>;
  return (
    <ul>
      {cities.map((city) => (
        <li className="text-base-100" key={city.id}>
          <div className="grid grid-cols-4">
            <div>{city.emoji}</div>
            <div>{city.cityName}</div>
            <div>{formatDate(city.date)}</div>
            <button>
              <IoCloseCircle />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
