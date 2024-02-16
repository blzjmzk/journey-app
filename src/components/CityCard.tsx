import { useParams, useSearchParams } from "react-router-dom";

const CityCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { id } = useParams();

  return (
    <>
      <div className="text-white flex flex-col justify-center items-center">
        <h1>City {id}</h1>
        <p>
          Position: {lng}, {lat}
        </p>
      </div>
    </>
  );
};

export default CityCard;
