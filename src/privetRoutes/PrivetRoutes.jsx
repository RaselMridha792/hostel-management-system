import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="min-h-screen flex items-center justify-center">
            <span className="w-40 loading loading-spinner text-error"></span>
        </div>
    }
    if(user){
        return children
    }
    return (
       <Navigate to='/login'></Navigate>
    );
};

PrivetRoutes.propTypes = {
    children: PropTypes.element
}
export default PrivetRoutes;