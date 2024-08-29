import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center mb-5">
      <h1 className="text-6xl">Which Element Are You?</h1>
      <p className="mt-5">{`(based on completely random things)`}</p>
      <div className="mt-5">
        <Link to="/">Home</Link>
        <Link to="/quiz" className="ml-5">
          Quiz
        </Link>
      </div>
    </div>
  );
};

export default Header;
