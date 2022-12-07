import "./Form.css";

// Assets
import SearchIcon from "../../assets/svg/Search.svg";

// Data
import { genders, governorates, months } from "../../data";

// Constants
import { idValidationRegex } from "../../helpers/constants";

const Form = (props) => {
  const processID = (e) => {
    e.preventDefault();

    // Validate Input
    if (!props.searchInput) return alert("Please enter an ID");
    if (!idValidationRegex.test(props.searchInput)) return alert("Invalid ID");

    const centuryCode = props.searchInput[0];
    const yearCode = props.searchInput[1] + props.searchInput[2];
    const monthCode = props.searchInput[3] + props.searchInput[4];
    const dayCode = props.searchInput[5] + props.searchInput[6];
    const governorateCode = props.searchInput[7] + props.searchInput[8];
    const genderCode = props.searchInput[12] % 2;

    props.setGender(genders[genderCode]);
    props.setGovernorate(governorates[governorateCode]);
    props.setBirthDate(
      `${dayCode} ${months[monthCode - 1]} ${
        centuryCode === "2" ? "19" : "20"
      }${yearCode}`
    );
    props.setIsFormSubmitted(true);
  };

  const clearResult = () => {
    props.setIsFormSubmitted(false);
    props.setSearchInput("");

    props.setBirthDate("");
    props.setGender("");
    props.setGovernorate("");
  };

  return (
    <div class="search">
      <form onSubmit={(e) => processID(e)}>
        <img src={SearchIcon} alt="Search" />
        <input
          type="text"
          name="ID-Number"
          id="ID-Number"
          placeholder="رقم البطاقة ..."
          onChange={(e) => {
            props.setSearchInput(e.target.value);
          }}
          value={props.searchInput}
        />
        {props.isFormSubmitted ? (
          <div class="clear" onClick={() => clearResult()}>
            &#215;
          </div>
        ) : null}
        <button>إبحث!</button>
      </form>
    </div>
  );
};

export default Form;
