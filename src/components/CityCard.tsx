import { useParams } from "react-router-dom";

const CityCard = () => {
  const { id } = useParams();
  return <h1>City</h1>;
};

export default CityCard;
