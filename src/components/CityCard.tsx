import { format } from "date-fns";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";

const CityCard = () => {
  const { id } = useParams();
  const { getCity, currentCity, isLoading, error } = useCities();

  useEffect(() => {
    if (id) {
      getCity(id);
    }
  }, [id]);

  if (isLoading) return <span className="loading loading-spinner loading-lg" />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!currentCity) return <p className="text-white">No city data available</p>;

  return (
    <div className="text-white flex flex-col gap-5 justify-center items-left">
      <h1 className="font-semibold text-lg">{currentCity.cityName}</h1>
      <div className="flex flex-col gap-2">
        <p>Last stay:</p>
        <p>{format(new Date(currentCity.date), "MMMM do, yyyy")}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Your Notes:</p>
        <p>{currentCity.notes}</p>
      </div>
      <BackButton />
    </div>
  );
};

export default CityCard;
