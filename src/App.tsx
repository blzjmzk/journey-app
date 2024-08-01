import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cities from "./components/Cities";
import CityCard from "./components/CityCard";
import Countries from "./components/Countries";
import Form from "./components/Form";
import AppLayout from "./pages/AppLayout";
import Features from "./pages/Features";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { CitiesProvider } from "./contexts/CitiesContext";

const App = () => {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="features" element={<Features />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Cities />} />
            <Route path="cities" element={<Cities />} />
            <Route path="cities/:id" element={<CityCard />} />
            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
