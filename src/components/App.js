import React, { Suspense, lazy, useEffect, createContext } from "react";
import { useLocation, useRoutes } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from "routes/PublicRoute";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

// components
import LoadingSpinner from '../components/Spinner/';
import BodyTheme from "./BodyTheme";
import { getCurrentUser } from "redux/auth/auth-operation";

export const ThemeContext = createContext(null);

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Phonebook = lazy(() => import('../pages/PhonebookPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "register",
      element:
        <PublicRoute>
          <Register />
        </PublicRoute>,

    },
    {
      path: "login",
      element:
        <PublicRoute>
          < Login />
        </PublicRoute>,

    },
    {
      path: "phonebook",
      element:
        <PrivateRoute>
          < Phonebook />
        </PrivateRoute>,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
  if (!element) return null;

  return (
    <>
      <BodyTheme>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            {React.cloneElement(element, { key: location.pathname })}
          </Suspense>
        </AnimatePresence>
      </BodyTheme>
      {/* <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route exact path='/' component={Home} />
            <PublicRoute
              path='/register'
              restricted
              redirectTo='/phonebook'
              component={Register} />
            <PublicRoute
              path='/login'
              restricted
              redirectTo='/phonebook'
              component={Login} />
            <PrivateRoute path='/phonebook' component={Phonebook} redirectTo='/' />
            <Route component={NotFound} />
          </Routes>
        </AnimatePresence>
      </Suspense> */}

    </>
  )
}


