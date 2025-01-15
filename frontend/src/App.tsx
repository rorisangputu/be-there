import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { useAppContext } from "./contexts/AppContext";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import EditProfile from "./pages/EditProfile";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

        {isLoggedIn && (
          <>
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/create"
              element={
                <Layout>
                  <Create />
                </Layout>
              }
            />
            <Route
              path="/edit-profile/:userId"
              element={
                <Layout>
                  <EditProfile />
                </Layout>
              }
            />
          </>
        )}
        {/* CATCH ALL ROUTE */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
