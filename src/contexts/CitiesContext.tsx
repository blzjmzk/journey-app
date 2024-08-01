import { createContext, useContext, useEffect, useState } from "react";
import City from "../../entities/City";

interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
}

const CitiesContext = createContext<CitiesContextType | undefined>(undefined);

const BASE_URL = "http://localhost:9000";

const CitiesProvider = ({ children }: { children: React.ReactNode }) => {
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
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Cities Context was used outside the cities provider.");
  }
  return context;
};

export { CitiesProvider, useCities };
