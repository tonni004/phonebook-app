import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsAuthenticated } from "redux/auth/auth-selectors"

// export default function PublicRoute({
//     component: Component,
//     // isAuthenticated,
//     redirectTo,
//     children,
//     ...routeProps
// }) {
//     const isLoggedIn = useSelector(getIsAuthenticated);

//     return (
//         <Route {...routeProps} >
//             {
//                 isLoggedIn && routeProps.restricted ? (
//                     <Navigate to={redirectTo} />)
//                     : (<Component />)

//             }
//         </Route>

//     )
// }

export default function PublicRoute({ children }) {
    const isSignedIn = useSelector(getIsAuthenticated);
    return (
        <>
            {isSignedIn ? <Navigate to="/phonebook" /> : children}

        </>
    );
}

