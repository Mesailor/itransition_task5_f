import { createContext, useState, useEffect } from "react";
import apiService from "../../services/APIService";

export const AppContext = createContext();

export function AppProvider({ children }) {
  let [usersData, setUsersData] = useState([]);
  let [region, setRegion] = useState("US");
  let [errorNum, setErrorNum] = useState(0);
  let [seed, setSeed] = useState(0);
  let [page, setPage] = useState(0);

  const context = {
    usersData,
    setUsersData,
    region,
    setRegion,
    errorNum,
    setErrorNum,
    seed,
    setSeed,
    page,
    setPage,
  };

  useEffect(() => {
    if (seed === "" || seed < 0) return;
    if (errorNum === "" || errorNum < 0) return;
    try {
      apiService.getData20({ region, seed, page: 0, errorNum }).then((data) => {
        setPage(0);
        setUsersData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, [region, seed]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
