import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        {/* CATCH ALL ROUTE */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
