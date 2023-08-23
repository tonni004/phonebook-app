import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsAuthenticated } from "redux/auth/auth-selectors"


export default function PrivateRoute({ children }) {
    const isSignedIn = useSelector(getIsAuthenticated);
    return (
        <>
            {isSignedIn ? children : <Navigate to="/phonebook-app/login" />}

        </>
    );
}

// other version

// export default function PrivateRoute({
//     // isAuthenticated,
//     children,
//     redirectTo,
//     ...routeProps
// }) {
//     const isLoggedIn = useSelector(getIsAuthenticated);
//     return (
//         <Route {...routeProps}>
//             {isLoggedIn && routeProps.restricted ? (children) : (<Navigate to={redirectTo} />)}
//         </Route>
//     )
// }