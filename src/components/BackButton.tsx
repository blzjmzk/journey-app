import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      Back
    </button>
  );
};

export default BackButton;
