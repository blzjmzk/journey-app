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

const Cities = ({ cities, isLoading }: Props) => {
  if (isLoading) return <span className="loading loading-spinner loading-lg" />;
  return (
    <ul>
      {cities.map((city) => (
        <li className="text-base-100" key={city.id}>
          {city.cityName}
        </li>
      ))}
    </ul>
  );
};

export default Cities;
