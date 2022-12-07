import "./ResultPlaceholder.css";

// Assets
import PlaceHolderImage from "../../assets/svg/Results-Placeholder.svg";

const ResultPlaceholder = () => {
  return (
    <div class="search-result-placeholder">
      <p>إكتب أي رقم قومي عشان تظهرلك شوية بيانات ليه</p>
      <img src={PlaceHolderImage} alt="Search Illustration" />
    </div>
  );
};

export default ResultPlaceholder;
