import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import City from "../../entities/City";

interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  getCity: (id: string) => void;
  error: string | null;
}

const CitiesContext = createContext<CitiesContextType | undefined>(undefined);

const BASE_URL = "http://localhost:9000";

const CitiesProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        setError("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      setError("There was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, error }}
    >
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
