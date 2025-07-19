import logo from "../images/logo.PNG";

const Header = () => {
  return (
    <header className="flex items-center p-4 shadow">
      <img src={logo} alt="Flamingo Publishers Logo" style={{ height: "100px", width: "auto" }} />
    </header>
  );
};

export default Header;