import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const {createUser, createUserWithGoogle} = useContext(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result)
            e.target.reset();
            navigate("/")
        })
        .catch(error=> {
            console.log(error.message)
        })
    }
    const handleSignInWithGoogle = () =>{
      createUserWithGoogle()
      .then(result =>{
        console.log(result.user.displayName)
        navigate("/booknow")
      })
      .catch(error=>{
        console.log(error.message)
      })

    }
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="text-center font-bold text-2xl pt-5">
                Register Your Account
            </div>
            <div onClick={handleSignInWithGoogle} className="flex items-center gap-3 text-xl btn btn-outline rounded-full text-black font-bold">
              <FaGoogle />Login with Google
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="+880"
                className="input input-bordered"
                required
              />
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Register</button>
            </div>
            <div className="text-center font-semibold">
                have an account? <Link className="text-red-600" to='/login'>login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
