import "./Result.css";

// Assets
import GenderIcon from "../../assets/svg/Gender.svg";
import LocationIcon from "../../assets/svg/Location.svg";
import BirthDateIcon from "../../assets/svg/BirthDate.svg";

const Result = (props) => {
  return (
    <div class="search-result">
      <div class="card gradient">قدرنا نعرف الأتي</div>
      <div class="card gender">
        <div class="card-header">
          <img src={GenderIcon} alt="Gender" />
          <div class="title">النوع</div>
        </div>

        <div class="card-body">
          <div class="value">{props.gender}</div>
        </div>
      </div>
      <div class="card location">
        <div class="card-header">
          <img src={LocationIcon} alt="Location" />
          <div class="title">محل الإقامة</div>
        </div>

        <div class="card-body">
          <div class="value">{props.governorate}</div>
        </div>
      </div>
      <div class="card birth-date">
        <div class="card-header">
          <img src={BirthDateIcon} alt="BirthDate" />
          <div class="title">تاريخ الميلاد</div>
        </div>

        <div class="card-body">
          <div class="value">{props.birthDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
