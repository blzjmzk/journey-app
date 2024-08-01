import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div>Form</div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Form;
