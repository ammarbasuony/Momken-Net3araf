import "./Header.css";

// Assets
import Logo from "../../assets/svg/Logo.svg";

const Header = () => {
  return (
    <>
      <div class="topbar">
        <div class="logo">
          <img src={Logo} alt="ممكن نتعرف" />
        </div>
      </div>

      <div class="Main-Header">
        <h1>ممكن نتعرف!</h1>
        <p>من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</p>
      </div>
    </>
  );
};

export default Header;
