import { useState } from "react";

import "./Home.css";

// Components
import Header from "../../components/Header";
import Form from "../../components/Form";
import ResultPlaceholder from "../../components/ResultPlaceholder";
import Result from "../../components/Result";
import Footer from "../../components/Footer";

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");

  return (
    <div class="wrapper">
      <section>
        <Header />
        <Form
          searchInput={searchInput}
          isFormSubmitted={isFormSubmitted}
          setSearchInput={setSearchInput}
          setBirthDate={setBirthDate}
          setGender={setGender}
          setGovernorate={setGovernorate}
          setIsFormSubmitted={setIsFormSubmitted}
        />
        {isFormSubmitted ? (
          <Result
            birthDate={birthDate}
            gender={gender}
            governorate={governorate}
          />
        ) : (
          <ResultPlaceholder />
        )}
        <Footer />
      </section>
    </div>
  );
};

export default Home;
