import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hostel.png";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../provider/firebase.init";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign Out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to="/booknow">Book Now</NavLink>
        ) : (
          <NavLink to="/register">Register</NavLink>
        )}
      </li>
    </>
  );

  return (
    <>
      <nav className="bg-base-100 py-5">
        <div className="navbar max-w-screen-2xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl"
              >
                {links}
              </ul>
            </div>
            <img className="w-10" src={logo} alt="" />
            <Link
              to="/"
              className=" hidden md:flex text-2xl font-bold uppercase"
            >
              Hostello
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
          </div>
          <div className="navbar-end gap-5 text-xl">
            <select className="hidden md:flex" name="" id="">
              <option value="">School</option>
              <option value="">Collage</option>
              <option value="">Polytechnic</option>
              <option value="">University</option>
            </select>
            {user ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <>
                {" "}
                <Link to="/login" className="flex gap-3 items-center">
                  <img className="w-5" src={userImg} alt="" />
                  Login
                </Link>
              </>
            )}

            <Link
              to="/booknow"
              className="btn btn-success font-bold rounded-3xl"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 text-white hidden md:flex">
          <ul className="navbar gap-5 items-center justify-center">
            <Link>platform</Link>
            <Link>technology</Link>
            <Link>Resource</Link>
            <Link>Pricing</Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
