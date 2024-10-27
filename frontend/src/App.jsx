import { Navigate, Route, Routes } from "react-router-dom";
//
import { useState } from "react";
import Table from "./components/table";

import Fixture from "./components/fixture";

import EPL from "./components/standings/epl";
import SerieA from "./components/standings/serieA";
import Laliga from "./components/standings/laliga";
import Bundesliga from "./components/standings/bundesliga";
import Ligue from "./components/standings/ligue";
import Team from "./components/standings/team/team";
//
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import News from "./pages/News";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import Stats from "./pages/Stats";
import Cricketnews from "./pages/Cricketnews";
import Sports from "./components/Sports";
import Footballnews from "./pages/Footballnews";
import Tennisnews from "./pages/Tennisnews";
import Cricketscore from "./pages/Cricketscore";
import Odi from "./pages/Odi";
import FirstClass from "./pages/FirstClass";
import Test from "./pages/Test";
import Twenty from "./pages/Twenty";
import Football from "./pages/Football";
import Score from "./pages/Score";
import Cricketstats from "./pages/Cricketstats";
import Footballstats from "./pages/Footballstats";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  //
  const [fixtures, setFixtures] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const fetchInfo = async () => {
    const data = await fetchFixtures();
    const test = await fetchTesting();

    const italy = test.response.filter((match) => {
      return match.country.name === "Spain";
    });

    setFixtures(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  //
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-[100vh] bg-gradient-to-br
     flex justify-center relative overflow-hidden"
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/News"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Sports"
          element={
            <ProtectedRoute>
              <Sports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Footballnews"
          element={
            <ProtectedRoute>
              <Footballnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketstats"
          element={
            <ProtectedRoute>
              <Cricketstats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Footballstats"
          element={
            <ProtectedRoute>
              <Footballstats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Score"
          element={
            <ProtectedRoute>
              <Score />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketnews"
          element={
            <ProtectedRoute>
              <Cricketnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Tennisnews"
          element={
            <ProtectedRoute>
              <Tennisnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Stats"
          element={
            <ProtectedRoute>
              <Stats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketscore"
          element={
            <ProtectedRoute>
              <Cricketscore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/footballscore"
          element={
            <ProtectedRoute>
              <Football />
            </ProtectedRoute>
          }
        />
        <Route
          path="/odi"
          element={
            <ProtectedRoute>
              <Odi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/firstclass"
          element={
            <ProtectedRoute>
              <FirstClass />
            </ProtectedRoute>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route
          path="/t-20"
          element={
            <ProtectedRoute>
              <Twenty />
            </ProtectedRoute>
          }
        />
        <Route path="/football/" element={<Table data={fixtures} />}></Route>
        <Route path="/football/epl" element={<EPL />}></Route>
        <Route path="/football/seriea" element={<SerieA />}></Route>
        <Route path="/football/laliga" element={<Laliga />}></Route>
        <Route path="/football/bundesliga" element={<Bundesliga />}></Route>
        <Route path="/football/ligue" element={<Ligue />}></Route>
        <Route
          path="/football/fixture/:matchID"
          element={<Fixture data={fixtures} />}
        ></Route>
        <Route
          path="/football/team/:teamID/:leagueID"
          element={<Team />}
        ></Route>
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
