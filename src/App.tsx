import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Features from "./pages/Features";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="features" element={<Features />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<Cities cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<Cities cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<Countries />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
