import { IoCloseCircle } from "react-icons/io5"; // Licence: MIT
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const Cities = () => {
  const { cities, isLoading, currentCity } = useCities();

  if (isLoading) return <span className="loading loading-spinner loading-lg" />;
  if (!cities.length) return <span>Click a city to add to your journey!</span>;

  return (
    <ul>
      {cities.map((city) => (
        <li
          className={`text-base-100 py-4 ${
            currentCity && currentCity.id === city.id
              ? "bg-slate-400 rounded-md"
              : ""
          }`}
          key={city.id}
        >
          <div className="grid grid-cols-[10%_40%_30%_20%] gap-1 px-2">
            <div>{city.emoji}</div>
            <Link
              to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
            >
              <div className="hover:text-blue-500">{city.cityName}</div>
            </Link>
            <div>{formatDate(city.date)}</div>
            <button className="pl-2 hover:text-red-600">
              <IoCloseCircle />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
