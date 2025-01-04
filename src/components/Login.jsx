import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [account, setAccount] = useState(false);
  const navigate = useNavigate()

  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate('/booknow')
      })
      .catch((error) => {
        console.log(error.message);
        setAccount(true);
      });
  };
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center font-bold text-2xl pt-5">
              Login Your Account
              {account && (
                <p className="text-sm text-red-500 font-semibold">
                  you dont have any account please login first
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Login</button>
            </div>
            <div className="text-center font-semibold">
              dont have an account?{" "}
              <Link className="text-red-600" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
